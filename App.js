'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Route = ReactRouterDOM.Route;

var UpdateContext = React.createContext(false);

var MOCK_DATA = {
    mode: 2, // 0 - нужна регистрация, 1 - сегодня не проводится, 2 - проводится
    side: 0, // сторона, 0 - не выбрана, 1 - светлая, 2 - темная
    timeLeft: 50000, // осталось времени
    lottery: {
        name: '6/49',
        img: '../assets/img/6-49.png',
        progress: {
            // прогресс покупки лотерей
            current: 500,
            max: 1000
        }
    }
};

var App = function App() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        showRegister = _React$useState2[0],
        setShowRegister = _React$useState2[1];

    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        showClosed = _React$useState4[0],
        setShowClosed = _React$useState4[1];

    var _React$useState5 = React.useState(''),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        info = _React$useState6[0],
        setInfo = _React$useState6[1];

    var _React$useState7 = React.useState(0),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        mode = _React$useState8[0],
        setMode = _React$useState8[1];

    var _React$useState9 = React.useState(''),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        bgInfo = _React$useState10[0],
        setBgInfo = _React$useState10[1];

    var _React$useState11 = React.useState(true),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        isLoading = _React$useState12[0],
        setIsLoading = _React$useState12[1];

    var _React$useState13 = React.useState(''),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        colorBg = _React$useState14[0],
        setColorBg = _React$useState14[1];

    var _React$useState15 = React.useState(''),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        mainColor = _React$useState16[0],
        setMainColor = _React$useState16[1];

    var _React$useState17 = React.useState(0),
        _React$useState18 = _slicedToArray(_React$useState17, 2),
        updateContext = _React$useState18[0],
        setUpdateContext = _React$useState18[1];

    //Проверка на мобильные устройства.


    function checkMobileDevice() {
        if (screen.width <= 1024 || window.innerWidth <= 1024) {
            return true;
        } else {
            return false;
        }
    }

    var whatPictures = void 0;
    if (updateContext === 1) {
        whatPictures = 'url(' + (checkMobileDevice() ? '../assets/img/main-bg-blue-mobile.png' : '../assets/img/main-bg-blue.png') + ')';
        document.documentElement.style.setProperty('--theme-color', 'var(--color-blue)');
    } else if (updateContext === 2) {
        whatPictures = 'url(' + (checkMobileDevice() ? '../assets/img/main-bg-red-mobile.png' : '../assets/img/main-bg-red.png') + ')';
        document.documentElement.style.setProperty('--theme-color', 'var(--color-red)');
    } else {
        whatPictures = 'url(' + (checkMobileDevice() ? '../assets/img/main-bg-bluered-mobile.png' : '../assets/img/main-bg-bluered.png') + ')';
    }

    React.useEffect(function () {
        $.ajax({
            url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
            type: 'GET',
            data: { srv: 'bgStart', token: token, tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6' },
            dataType: 'Object',
            async: true,
            success: function success() {},
            error: function error() {},
            complete: function complete(data) {
                var result = JSON.parse(data.responseText);
                console.log(result);
                setInfo(result);
                document.title = result.title;
                setColorBg(result.backGround);
                setMainColor(result.color);

                if (result.status === 'Error') {
                    showError(result.msg ? result.msg : '<#trn_Что-то пошло не так>');
                    // console.error(result.msg);
                } else {
                    setIsLoading(false);
                    if (token && (result.mode === 1 || result.mode === 6)) {
                        var _mode = result.mode;
                        $.ajax({
                            url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
                            type: 'GET',
                            data: {
                                srv: 'bgInfo',
                                token: token,
                                tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6'
                            },
                            dataType: 'Object',
                            success: function success() {},
                            error: function error() {},
                            complete: function complete(data) {
                                var result = JSON.parse(data.responseText);
                                setMode(_mode);
                                setBgInfo(result);
                                // console.log(result);
                            }
                        });
                    } else {
                        switch (result.mode) {
                            case 1:
                                // console.log('Для всех');
                                $.ajax({
                                    url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
                                    type: 'GET',
                                    data: {
                                        srv: 'bgInfo',
                                        tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6'
                                    },
                                    dataType: 'Object',
                                    success: function success() {},
                                    error: function error() {},
                                    complete: function complete(data) {
                                        var result = JSON.parse(data.responseText);

                                        setMode(1);
                                        setBgInfo(result);
                                    }
                                });
                                break;
                            case 2:
                                // console.log('Акция закрыта');
                                setShowClosed(true);
                                $.ajax({
                                    url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
                                    type: 'GET',
                                    data: {
                                        srv: 'bgInfo',
                                        tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6'
                                    },
                                    dataType: 'Object',
                                    success: function success() {},
                                    error: function error() {},
                                    complete: function complete(data) {
                                        var result = JSON.parse(data.responseText);

                                        setMode(2);
                                        setBgInfo(result);
                                    }
                                });
                                break;
                            case 3:
                                // console.log('Акция открыта');
                                $.ajax({
                                    url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
                                    type: 'GET',
                                    data: {
                                        srv: 'bgInfo',
                                        tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6'
                                    },
                                    dataType: 'Object',
                                    success: function success() {},
                                    error: function error() {},
                                    complete: function complete(data) {
                                        var result = JSON.parse(data.responseText);

                                        setMode(3);
                                        setBgInfo(result);
                                    }
                                });
                                break;
                            case 4:
                                // console.log('Не зарегестрирован в акции');
                                setMode(4);
                                setShowRegister(true);
                                break;
                            case 5:
                                // console.log('Не зарегистрированный, все акции закрыты');
                                setMode(5);
                                break;
                            case 6:
                                // console.log('Для всех');
                                $.ajax({
                                    url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
                                    type: 'GET',
                                    data: {
                                        srv: 'bgInfo',
                                        tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6'
                                    },
                                    dataType: 'Object',
                                    success: function success() {},
                                    error: function error() {},
                                    complete: function complete(data) {
                                        var result = JSON.parse(data.responseText);
                                        setMode(6);
                                        setBgInfo(result);
                                    }
                                });
                                break;
                        }
                    }
                }
            }
        });
    }, []);

    colorBg.length !== 0 && document.documentElement.style.setProperty('--theme-color-bg', '#' + colorBg);
    mainColor.length !== 0 && document.documentElement.style.setProperty('--theme-color-main', '#' + mainColor);

    if (isLoading) {
        return React.createElement(
            'div',
            { className: 'preloader' },
            React.createElement('div', { className: 'spinner' })
        );
    }

    return React.createElement(
        ReactRouterDOM.HashRouter,
        null,
        React.createElement(
            UpdateContext.Provider,
            { value: [updateContext, setUpdateContext] },
            React.createElement(
                'div',
                { className: 'app' },
                MOCK_DATA.mode === 0 && React.createElement(Modal, {
                    title: '<#trn_войдите или зарегистрируйтесь>',
                    desc: '<#trn_Для участия в лотобитве, войдите или зарегистрируйтесь.>',
                    isButton: true,
                    show: true
                }),
                MOCK_DATA.mode === 1 && React.createElement(Modal, {
                    title: '<#trn_Сегодня лотобитва не проводится>',
                    desc: '<#trn_Следите за новостями, мы сообщим о следующей лотобитве.>',
                    show: true
                }),
                React.createElement(
                    'section',
                    {
                        className: 'lotobattle',
                        style: {
                            backgroundImage: 'url(' + (checkMobileDevice() ? '../assets/img/header-bg-mobile.png' : '../assets/img/header-bg.png') + '), ' + whatPictures
                        }
                    },
                    React.createElement(
                        'div',
                        { className: 'lotobattle__wrapper' },
                        React.createElement(
                            'div',
                            { className: 'container' },
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(Main, {
                                    side: MOCK_DATA.side,
                                    timeLeft: MOCK_DATA.timeLeft,
                                    lottery: MOCK_DATA.lottery
                                })
                            )
                        )
                    )
                )
            )
        )
    );
};

var domContainer = document.querySelector('#app');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App, null));