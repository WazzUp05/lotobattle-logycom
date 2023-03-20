class Validation {
    constructor() {
        this.EMAIL_REG_EXP = /^([a-z0-9_\-.]{2,})@([\w\-.]+)\.([a-z]{2,})$/;
        this.EMAIL_VALUE_ERROR = '<#trn_Неверный формат почты>';
        this.results = {
            isEmail: false,
            isMin: false,
            isMax: false,
            isEmpty: false,
            validName: false,
        };
        this.inputError = '';
    }
    _setIsValid(validation, validValue) {
        return (this.results[validation] = validValue);
    }
    _setInputError(error) {
        return (this.inputError = error);
    }
    validate(options) {
        validationLoop: for (const validation in options.validations) {
            if (validation === 'email') {
                if (!EMAIL_REG_EXP.test(String(value).toLowerCase())) {
                    _setInputError(EMAIL_VALUE_ERROR);
                    this._setIsValid('isEmail', true);
                    break validationLoop;
                } else {
                    this._setIsValid('isEmail', false);
                    _setInputError('');
                }
            } else if (validation === 'min') {
                if (value.length < options.validations[validation]) {
                    this._setIsValid('isMin', true);
                    setInputError(MIN_VALUE_ERROR);
                    break validationLoop;
                } else {
                    setIsMin(false);
                    setInputError('');
                }
            } else if (validation === 'max') {
                if (value.length > validations[validation]) {
                    setIsMax(true);
                    setInputError(MAX_VALUE_ERROR);
                    break validationLoop;
                } else {
                    setIsMax(false);
                    setInputError('');
                }
            } else if (validation === 'empty') {
                if (!value) {
                    setIsEmpty(true);
                    setInputError(EMPTY_VALUE_ERROR);
                    break validationLoop;
                } else {
                    setIsEmpty(false);
                    setInputError('');
                }
            } else if (validation === 'validName') {
                if (!NAME_REG_EXP.test(String(value))) {
                    setIsName(true);
                    setInputError(NAME_VALUE_ERROR);
                    break validationLoop;
                } else {
                    setIsName(false);
                    setInputError('');
                }
            }
        }
    }
}

const emailRegex = /^([a-z0-9_\-.]{2,})@([\w\-.]+)\.([a-z]{2,})$/;
const telRegex = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;
const nickNameRegex = /^[а-яА-Я 0-9a-zA-Z]{1,32}$/;
let overTimeout, smsTimer;
let DYNAMIC_SMS_TIME = 0;
const DEFAULT_SMS_TIME = 60;

//Валидация одного элемента.
function validate(element, message, code) {
    let form = element.parentNode.parentNode;
    if (element.name == 'tmINN') form = element.parentNode.parentNode.parentNode;
    const errorElement = document.querySelector(`.error-message-${element.name}`); //Выбираем контейнер с ошибкой
    if (element.tagName != 'BUTTON' || element.tagname != 'TEXTAREA') {
        //Если не кнопка то продолжаем
        if ((element.value.length == 0 || element.value == '') && element.name !== 'emailreg') {
            //Если пустое выводит сообщение
            if (element.name == 'tel') errorElement.textContent = '<#trn_Введите телефон>';
            else if (element.name == 'password') errorElement.textContent = '<#trn_Введите пароль>';
            else if (element.name == 'tmINN' && element.getAttribute('id') != 'a2') errorElement.textContent = '<#trn_Введите ИИН>';
            else if (element.name == 'tmINN' && element.getAttribute('id') == 'a2') errorElement.textContent = '<#trn_Введите номер паспорта>';
            else if (element.name == 'username') errorElement.textContent = '<#trn_Введите имя>';
            else if (element.name == 'str1' || element.name == 'str2') {
                errorElement.textContent = '<#trn_Введите номер>';
                form = element.parentNode.parentNode.parentNode;
            } else if (element.name == 'sum') {
                errorElement.textContent = '<#trn_Введите сумму>';
            } else if (element.name == 'nickname') {
                errorElement.textContent = '<#trn_Введите имя>';
            }
            disableButton(form);
            activateError(element, errorElement); //Отображение ошибки
            return false;
        } else if (element.name == 'tel' && element.value.replace(/\s/g, '').length < 12) {
            //Если телефон проверка на количество введенных символов
            errorElement.textContent = '<#trn_Введите телефон полностью>';
            disableButton(form);
            activateError(element, errorElement);
            return false;
        } else if (element.name == 'tel' && !telRegex.test(element.value.replace(/\s/g, ''))) {
            errorElement.textContent = '<#trn_Телефон содержит неправильные символы>';
            disableButton(form);
            activateError(element, errorElement);
        } else if ((element.name == 'password' || element.name == 'newpassword' || element.name == 'renewpassword') && element.value.length < 6) {
            //Проверяет пароли регистрации и восстановления не менее 6 символов
            errorElement.textContent = '<#trn_Введите пароль полностью>';
            disableButton(form);
            activateError(element, errorElement);
            return false;
        } else if (message != null || message != undefined) {
            //Если есть сообщениен с сервера выводим его.
            if (code == 4) {
                form = element.parentNode.parentNode.parentNode;
            }
            errorElement.textContent = message;
            disableButton(form);
            activateError(element, errorElement);
            return false;
        } else if (element.name == 'confirm' && !$('.confirm-checkbox').prop('checked')) {
            //Проверка соглашения с условиями
            element.style.color = 'red';
            $('.check-container label, .check-container a').prop('style', 'color: red!important;');
            form = element.closest('.signform');
            disableButton(form);
            activateError(element, errorElement);
            return false;
        } else if (element.name == 'renewpassword') {
            //Проверка паролей регистрации, пароли должны совпадать
            if ($('.input_type_newpassword').val() != element.value) {
                errorElement.textContent = '<#trn_Пароли не совпадают>';
                disableButton(form);
                activateError(element, errorElement);
                return false;
            }
        } else if (element.name == 'email' && !emailRegex.test(element.value.toLowerCase())) {
            //Проверка формата электронной почты
            errorElement.textContent = '<#trn_Неверная почта>';
            disableButton(form);
            activateError(element, errorElement);
            return false;
        } else if (element.name == 'emailreg' && element.value.length > 0) {
            //  && element.name == 'emailreg' && !emailRegex.test(element.value.toLowerCase()) && element.value.length >= 32) {
            if (!emailRegex.test(element.value.toLowerCase()) || element.value.length >= 32) {
                errorElement.textContent = '<#trn_Неверный формат почты>';
                disableButton(form);
                activateError(element, errorElement);
                return false;
            }
        } else if (element.name == 'tmScanFile' || element.name == 'tmScanFileBack' || element.name == 'tmScanPDF') {
            //Проверяем размер загружаемого файла
            form = element.closest('form');
            if (checkFileSize(element)) {
                showError('<#trn_Объем загружаемого файла должен быть не более 5 МБ>');
                disableButton(form);
                return false;
            }
        } else if (
            element.name == 'tmINN' &&
            ((element.getAttribute('id') == 'a2' && element.value.length < 8) ||
                (element.getAttribute('id') != 'a2' && !checkBirthday(element.value)))
        ) {
            //Проверяем ИИН и правильность ИИНА
            if (!checkBirthday(element.value)) {
                if (element.value.length < 12) {
                    errorElement.textContent = '<#trn_Введите ИИН полностью>';
                } else {
                    errorElement.textContent = '<#trn_Проверьте введенный ИИН>';
                }
            }
            if (element.getAttribute('id') == 'a2') {
                errorElement.textContent = '<#trn_Введите номер полностью>';
            }
            disableButton(form);
            activateError(element, errorElement);
            return false;
        } else if (element.name == 'str1' || element.name == 'str2') {
            if (!validateTicketNumbers(element)) {
                errorElement.textContent = '<#trn_Введите номер полностью>';
                disableButton(element.parentNode.parentNode.parentNode);
                activateError(element, errorElement);
                return false;
            }
        } else if (element.name == 'nickname') {
            console.log(element.value.match(nickNameRegex));
            if (!element.value.match(nickNameRegex) || element.value[0] == ' ' || element.value[element.value.length - 1] == ' ') {
                errorElement.textContent = '<#trn_Недопустимые символы>';
                disableButton(element.parentNode.parentNode.parentNode);
                activateError(element, errorElement);
                return false;
            } else if (element.value.length < 2) {
                errorElement.textContent = '<#trn_Введите минимум 2 символа>';
                disableButton(element.parentNode.parentNode.parentNode);
                activateError(element, errorElement);
                return false;
            }
        }
        errorElement.style.display = 'block';
        resetError(element, errorElement); //Все ок? Сбрасываем ошибки.
        return true;
    }
}

// Активация ошибки
function activateError(element, err) {
    element.classList.add('input-invalid');
    if (err != undefined) {
        err.style.color = 'red';
        err.style.display = 'block';
    }
}

// Деактивация ошибки
function resetError(element) {
    const err = document.querySelector(`.error-message-${element.name}`);
    element.classList.remove('input-invalid');
    if (err != undefined) {
        err.style.color = '#8D8D8D';
        if (element.name == 'confirm') {
            element.style.color = '';
            $('.check-container label, .check-container a').prop('style', '');
            return;
        }
        err.textContent = element.getAttribute('placeholder');
    }
}

// Включает кнопку
function enableButton(form) {
    if (form.querySelector('.submit-button')) {
        form.querySelector('.submit-button').classList.add('button-active');
        form.querySelector('.submit-button').removeAttribute('disabled');
        return;
    }
    form.querySelector('.button').classList.add('button-active');
    form.querySelector('.button').removeAttribute('disabled');
}

// Отключает кнопку
function disableButton(form) {
    if (form.querySelector('.submit-button')) {
        form.querySelector('.submit-button').classList.remove('button-active');
        form.querySelector('.submit-button').setAttribute('disabled', true);
        return;
    }
    form.querySelector('.button').classList.remove('button-active');
    form.querySelector('.button').setAttribute('disabled', true);
}

function checkElems(form) {
    //По сути делает тоже что и валидация, но вместо ошибок разблокирует кнопки
    let tel, password, newpassword, renewpassword, checkbox, email, name, tmINN, tmScanFile, tmScanFileBack, tmScanFilePDF, sum;
    if (form.classList.contains('signinform') || form.classList.contains('changeTel')) {
        tel = form.elements.tel;
        password = form.elements.password;
        if (tel.value.replace(/\s/g, '').length == 12 && password.value.length >= 6) {
            resetError(tel);
            resetError(password);
            enableButton(form);
        }
    } else if (form.classList.contains('login')) {
        password = form.elements.password;
        if (password.value.length >= 6) {
            resetError(password);
            enableButton(form);
        }
    } else if (form.classList.contains('setPassword')) {
        tel = form.elements.tel;
        if (tel.value.replace(/\s/g, '').length >= 12) {
            resetError(tel);
            enableButton(form);
        } else {
            // activateError(tel);
            disableButton(form);
        }
    } else if (form.classList.contains('get-sms-code')) {
        tel = form.elements.tel;
        checkbox = $('.confirm-checkbox');
        email = form.elements.emailreg;
        let valid = true;
        if (email.value.length > 0) {
            if (tel.value.replace(/\s/g, '').length < 12) {
                valid = false;
            }
            if (!telRegex.test(tel.value.replace(/\s/g, ''))) {
                valid = false;
            }
            if (email.value.length > 32) {
                valid = false;
            }
            if (emailRegex.test(email.value.toLowerCase()) === false) {
                valid = false;
            }
            if (!checkbox.is(':checked')) {
                valid = false;
            }
            if (valid) {
                resetError(tel);
                resetError(email);
                enableButton(form);
            } else {
                disableButton(form);
            }
        } else {
            if (tel.value.replace(/\s/g, '').length < 12) {
                valid = false;
            }
            if (!checkbox.is(':checked')) {
                valid = false;
            }
            if (valid) {
                resetError(tel);
                resetError(email);
                enableButton(form);
            } else {
                disableButton(form);
            }
        }
        // if (checkbox.length == 0) {
        // 	if (tel.value.replace(/\s/g, '').length >= 12) {
        // 		resetError(tel);
        // 		enableButton(form);
        // 	} else {
        // 		disableButton(form);
        // 	}
        // } else if (email.value.length > 0 && emailRegex.test(email.value.toLowerCase()) && tel.value.replace(/\s/g, '').length >= 12 && checkbox.is(':checked')) {
        // 	resetError(tel);
        // 	resetError(email);
        // 	enableButton(form);
        // } else if (tel.value.replace(/\s/g, '').length == 12 && checkbox.is(':checked') && email.value.length == 0) {
        // 	resetError(tel);
        // 	enableButton(form);
        // }
    } else if (form.classList.contains('savepassword')) {
        newpassword = form.elements.newpassword;
        renewpassword = form.elements.renewpassword;
        if (newpassword.value.length >= 6 && renewpassword.value.length >= 6 && newpassword.value == renewpassword.value) {
            resetError(renewpassword);
            enableButton(form);
        }
    } else if (form.classList.contains('changePass')) {
        password = form.elements.password;
        newpassword = form.elements.newpassword;
        renewpassword = form.elements.renewpassword;
        if (password) {
            if (
                password.value.length >= 6 &&
                newpassword.value.length >= 6 &&
                renewpassword.value.length >= 6 &&
                newpassword.value == renewpassword.value
            ) {
                resetError(renewpassword);
                enableButton(form);
            }
        } else {
            if (newpassword.value.length >= 6 && renewpassword.value.length >= 6 && newpassword.value == renewpassword.value) {
                resetError(renewpassword);
                enableButton(form);
            }
        }
    } else if (form.classList.contains('changeEmail')) {
        email = form.elements.email;
        password = form.elements.password;
        if (emailRegex.test(email.value.toLowerCase()) && password.value.length >= 6) {
            resetError(email);
            resetError(password);
            enableButton(form);
        }
    } else if (form.getAttribute('id') === 'userDataForm') {
        name = form.elements.nickname;
        if (name.value.length > 0 && !name.value.includes('<') && !name.value.includes('>')) {
            resetError(name);
            enableButton(form);
        }
    } else if (form.classList.contains('name-form')) {
        name = form.elements.username;
        if (name.value != 0) {
            resetError(name);
            enableButton(form);
        }
    } else if (form.getAttribute('id') == 'docForm') {
        tmINN = form.elements.tmINN;
        residentValue = tmINN.getAttribute('id'); //check resident
        tmScanFile = form.elements.tmScanFile;
        tmScanFileBack = form.elements.tmScanFileBack;
        tmScanFilePDF = form.elements.tmScanFilePDF;

        if (
            residentValue == 'a1' &&
            checkImage(tmINN, residentValue) &&
            tmScanFile.value &&
            !checkFileSize(tmScanFile) &&
            tmScanFileBack.value &&
            !checkFileSize(tmScanFileBack)
        ) {
            resetError(tmINN);
            enableButton(form);
        } else if (residentValue == 'a2' && checkImage(tmINN, residentValue) && tmScanFile.value && !checkFileSize(tmScanFile)) {
            resetError(tmINN);
            enableButton(form);
        } else if (
            residentValue == 'a3' &&
            checkImage(tmINN, residentValue) &&
            tmScanFile.value &&
            !checkFileSize(tmScanFile) &&
            tmScanFileBack.value &&
            !checkFileSize(tmScanFileBack) &&
            tmScanFilePDF.value &&
            !checkFileSize(tmScanFilePDF)
        ) {
            resetError(tmINN);
            enableButton(form);
        }
    } else if (form.classList.contains('check-ticket__form')) {
        str1 = form.elements.str1;
        str2 = form.elements.str2;
        if (validateTicketNumbers(str1) && validateTicketNumbers(str2)) {
            resetError(str1);
            resetError(str2);
            enableButton(form);
        }
    } else if (form.classList.contains('cash-out-form')) {
        sum = form.elements.sum;
        tel = form.elements.tel;
        if (tel && tel.value.replace(/\s/g, '').length == 12 && Number(sum.value.replace(/\s/g, '')) > 0) {
            resetError(sum);
            resetError(tel);
            enableButton(form);
        } else if (Number(sum.value.replace(/\s/g, '')) > 0 && !tel) {
            resetError(sum);
            enableButton(form);
        } else {
            disableButton(form);
        }
    }
}

function checkImage(element, res) {
    if ((element.value.length == 12 && res != 'a2') || (element.value.length >= 8 && element.value.length <= 12 && res == 'a2')) {
        return true;
    }
    return false;
}

function checkFileSize(element) {
    if (element.files[0].size > 5000000) {
        return true;
    }
    return false;
}
// Проверяет переданную в функцию форму на ошибки.
function checkForm(form, elem) {
    let isValidForm = true; //Валидна или нет
    const inputs = Array.from(form.elements);
    inputs.forEach(item => {
        if (item.tagName == 'INPUT' && item.getAttribute('type') != 'submit') {
            if (!validate(item)) {
                isValidForm = false;
            }
        }
    });
    if (isValidForm) {
        enableButton(form);
        return true;
    } else {
        // disableButton(form);
        return false;
    }
}

// Функция переходит по инпутам кода.
function jumpOnInputs(e) {
    let target = e.currentTarget;
    let length = target.value.length;
    let nextInput = target.nextElementSibling;
    let prevInput = target.previousElementSibling;
    if (length > 1) {
        target.value = target.value.slice(0, 1);
    }
    if (length > 0 && nextInput && nextInput.tagName === 'INPUT') {
        nextInput.focus();
    }
    if (length == 0 && prevInput && prevInput.tagName === 'INPUT') {
        prevInput.focus();
    }
}

// Функция таймера для кнопки переотправки сообщения
function addSmsTimer(val, srv, captchakey) {
    const sendAgain = document.querySelector('.send-sms-button');
    sendAgain.setAttribute('disabled', true);
    sendAgain.classList.add('button-grey');
    sendAgain.innerHTML = `<#trn_Отправить еще раз><span class="sms-timer-span">${val} <#trn_сек></span>`;
    smsTimer = setInterval(() => {
        if (val == 1 || val < 1) {
            sendAgain.removeAttribute('disabled');
            sendAgain.classList.remove('button-grey');
            sendAgain.querySelector('span').remove();
            DYNAMIC_SMS_TIME = 0;
            clearInterval(smsTimer);
        } else {
            val--;
            sendAgain.querySelector('span').textContent = `${val} <#trn_сек>`;
            DYNAMIC_SMS_TIME = val;
        }
    }, 1000);
}

// Удаяем таймер 60 сек
function removeSmsTimer() {
    clearInterval(smsTimer);
}

// 10 минутный таймер
function timeIsOver() {
    overTimeout = setTimeout(() => {
        $('.modal__subtitle').prop('style', 'display: none');
        $('.form-item-codes').prop('style', 'display: none');
        $('.smsError').prop('style', 'display: flex');
        $('.sms-button-send').on('click', () => {
            $('.modal__subtitle').prop('style', '');
            $('.form-item-codes').prop('style', '');
            $('.smsError').prop('style', 'display: none');
            timeIsOver();
        });
    }, 600000);
}

// Показывать заголовок инпута при нажатии
function showTitle(el) {
    //элемент?
    let span = el.parentNode.querySelector('span');
    span.style.display = 'block';
    resetError(el); //Юзаем потому что возвражает названия инпутов.
}

// Показать спрятанные элементы под глазом. В данном случае изображение и инпуты.
function showHiddenInfo(element, type) {
    if (type == 'image') {
        let imageCont = element.parentNode.querySelector('#previewImage');
        imageCont.classList.toggle('blur__image');
        let eye = element.querySelector('#eye-svg');
        eye.classList.toggle('eye-active');
    }
}

// Показать кнопку которая показывает пароль =)
function showButtonPass(input) {
    let button = input.parentNode.querySelector('.show-pass-button');
    if (input.value.length != 0) {
        button.style.display = 'block';
    }
}

// Показать пароль
function showPassword(element) {
    let input = element.parentNode.querySelector('input');
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
        element.setAttribute('src', '<#SelfURLEx>/static/image/active-showpass-icon.svg');
    } else {
        input.setAttribute('type', 'password');
        element.setAttribute('src', '<#SelfURLEx>/static/image/showpass-icon.svg');
    }
}

// Удаляем 10 минутный таймер
function removeTimerIsOver() {
    clearTimeout(overTimeout);
}

function requestOrSendCode(phoneVal, codeVal, passwordVal) {
    if (codeVal) {
        return SendToSrv({ srv: 'sms_code', phone: phoneVal, code: codeVal });
    } else {
        return SendToSrv({ srv: 'sms_code', phone: phoneVal, password: passwordVal });
    }
}

function remindPass(phoneVal, passwordVal, codeVal, googleToken) {
    return SendToSrv({ srv: 'sms_password', phone: phoneVal, password: passwordVal, code: codeVal, googleToken: captcha });
}

function createUser(phoneVal, passwordVal, codeVal) {
    return SendToSrv({ srv: 'new_login', phone: phoneVal, password: passwordVal, code: codeVal });
}

function changeTel(phoneVal, codeVal, passwordVal) {
    return SendToSrv({ srv: 'profile', phone: phoneVal, phone_code: codeVal, password: passwordVal });
}

function changeEmail(emailVal, passwordVal) {
    return SendToSrv({ srv: 'email_code', e_mail: emailVal, password: passwordVal });
}

function changePass(passwordVal, newPasswordVal) {
    return SendToSrv({ srv: 'profile', oldPassword: passwordVal, newPassword: newPasswordVal });
}

function changeName(nameVal) {
    return SendToSrv({ srv: 'profile', nickname: nameVal });
}

function closeModal(modal, content) {
    if (modal != undefined) $(`.${modal}`).remove().fadeOut(280);
    if (content != undefined) $(`.${content}`).remove().fadeOut(280);
}

function checkBirthday(val) {
    if (val.length != 12) return false;
    let value = String(val);
    let cent = value[6],
        yy,
        mm,
        dd,
        maxDate,
        birthDay,
        currDay;
    if (cent == 3 || cent == 4) {
        yy = 19 + value[0] + value[1];
    } else if (cent == 5 || cent == 6) {
        yy = 20 + value[0] + value[1];
    } else {
        return false;
    }
    mm = value[2] + value[3];
    dd = value[4] + value[5];
    if (mm < 01 || mm > 12) return false;
    if (mm == 01 || mm == 03 || mm == 05 || mm == 07 || mm == 08 || mm == 10 || mm == 12) maxDate = 31;
    if (mm == 04 || mm == 06 || mm == 09 || mm == 11) maxDate = 30;
    if (mm == 2) {
        if (yy % 4 == 0 && yy % 100 !== 0) {
            maxDate = 29;
        } else {
            maxDate = 28;
        }
        if (dd > maxDate) return false;
    }
    birthDay = new Date(yy, mm - 1, dd);
    currDay = new Date();
    if (birthDay.getMonth() > currDay.getMonth() || (birthDay.getMonth() == currDay.getMonth() && birthDay.getDate() < currDay.getDate())) {
        yy++;
    }
    age = currDay.getFullYear() - yy - (currDay.getTime() < birthDay.setFullYear(yy));
    if (age < 18 || age > 100) return false;
    return true;
}

function validateTicketNumbers(element) {
    if (element.value.length < 21) {
        return false;
    }
    return true;
}
