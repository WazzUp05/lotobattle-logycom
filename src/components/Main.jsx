'use strict';

function Awards(params) {
    return (
        <div className="awards">
            <h2 className="awards__title">Заработанные награды</h2>
            <div className="awards__items">
                <div className="awards__item active">
                    <img src="../../assets/img/award.png" className="awards__item-img" alt="" />
                    <span className="awards__item-count">x1</span>
                </div>
                <div className="awards__item active">
                    <img src="../../assets/img/award.png" className="awards__item-img" alt="" />
                    <span className="awards__item-count">x1</span>
                </div>
                <div className="awards__item active">
                    <img src="../../assets/img/award.png" className="awards__item-img" alt="" />
                    <span className="awards__item-count">x1</span>
                </div>
            </div>
            <button className="main-button">забрать все награды</button>
        </div>
    );
}

function ModalRules({ isOpen, onClose }) {
    const [open, setOpen] = React.useState(false);

    const closeModal = () => {
        document.querySelector('body').style.removeProperty('overflow');
        document.querySelector('body').removeAttribute('data-modalOpen');
        document.querySelector('body').classList.remove('modal__is-opened');
        setOpen(false);
        onClose(false);
    };

    React.useEffect(() => {
        if (isOpen) {
            setOpen(true);
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('body').setAttribute('data-modalOpen', true);
            document.querySelector('body').classList.add('modal__is-opened');
        }
    }, [isOpen]);

    return (
        <div className={`modal-rules ${open ? 'show' : ''}`} onClick={closeModal}>
            <div
                className="modal-rules__content"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="close" onClick={closeModal}>
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.717979 4.18263C-0.238833 3.22581 -0.238833 1.67449 0.717979 0.717665C1.67479 -0.239158 3.22609 -0.239158 4.1829 0.717665L27.2824 23.8174C28.2392 24.7742 28.2392 26.3256 27.2824 27.2824C26.3256 28.2392 24.7743 28.2392 23.8175 27.2824L0.717979 4.18263Z"
                            fill="white"
                        />
                        <path
                            d="M4.18253 27.2823C3.22572 28.2392 1.67442 28.2392 0.717609 27.2823C-0.239203 26.3255 -0.239203 24.7742 0.717609 23.8174L23.8171 0.717617C24.7739 -0.239206 26.3252 -0.239206 27.282 0.717617C28.2388 1.67444 28.2388 3.22576 27.282 4.18258L4.18253 27.2823Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="modal-rules__wrapper">
                    <div className="modal-rules__left">
                        <h2 className="modal-rules__title">что такое лотобитва?</h2>
                        <p className="modal-rules__description">
                            Лотобитва - это игра в которой все участники делятся на две команды.
                        </p>
                        <h3 className="modal-rules__description-title">Правила игры:</h3>
                        <p className="modal-rules__description">
                            Каждая лотобитва длится один день и посвящена одной из тиражных лотерей.
                        </p>
                        <p className="modal-rules__description">
                            Участники игры выбирают сторону и покупают лотерейные билеты.
                        </p>
                        <p className="modal-rules__description">
                            Побеждает команда у которой сумма выигрышей, после подсчета результатов
                            тиража, будет больше.
                        </p>
                        <p className="modal-rules__description">
                            В качестве награды, победившая команда получает лотобоксы: чем больше
                            вклад, тем ценнее награда.
                        </p>
                        <h2 className="modal-rules__title">Когда я получу награду?</h2>
                        <p className="modal-rules__description">
                            Если ваша команда выиграет в лотобитве, то забрать награду можно будет
                            после подсчета результатов лотобитвы. Обычно через ММ-ММ минут после
                            тиража.
                        </p>
                        <h2 className="modal-rules__title">
                            Я забрал награду с лотобоксом, где мне его найти?
                        </h2>
                        <p className="modal-rules__description">
                            Все полученные лотобоксы можно найти в разделе профиль, на вкладке
                            лотобоксы.
                        </p>
                    </div>
                    <div className="modal-rules__right">
                        <h2 className="modal-rules__title">Какую награду я получу?.</h2>
                        <p className="modal-rules__description">
                            Если твоя сторона выиграла, то в награду ты получишь лотобоксы. Чем
                            больше билетов купишь, тем ценнее награда.
                        </p>
                        <table className="modal-rules__table">
                            <thead>
                                <tr>
                                    <th>Куплено билетов на сумму</th>
                                    <th>Награда</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>50 000</td>
                                    <td>Изумрудный лотобокс</td>
                                </tr>
                                <tr>
                                    <td>30 000</td>
                                    <td>Алмазный лотобокс</td>
                                </tr>
                                <tr>
                                    <td>10 000</td>
                                    <td>Золотой лотобокс</td>
                                </tr>
                                <tr>
                                    <td>5 000</td>
                                    <td>Серебряный лотобокс</td>
                                </tr>
                                <tr>
                                    <td>1 000</td>
                                    <td>Деревянный лотобокс</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2 className="modal-rules__title">Что содержится в лотобоксах?</h2>
                        <p className="modal-rules__description">
                            В каждом лотобоксе есть бонусы, которые можно потратить на покупку
                            лотерей. Количество бонусов зависит от редкости лотобокса и вашей удачи.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Main({ mode, side, lottery, timeLeft }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = (value) => {
        setIsOpen(value);
    };

    return (
        <React.Fragment>
            <div className="col-lg-12">
                <img
                    src="../../assets/img/lotobattle-logo=header-desktop.png"
                    alt=""
                    className="lotobattle__img img-fluid"
                />
                <h1 className="lotobattle__title">
                    Выбирай сторону, участвуй в битве дня
                    <br />
                    <span>и выигрывай призы</span>
                </h1>
                <button onClick={() => setIsOpen(true)} className="lotobattle__button main-button">
                    правила игры
                </button>
            </div>
            <ModalRules onClose={onClose} isOpen={isOpen} />

            <div className="col-lg-12">
                <Awards />
            </div>

            <div className="col-lg-12">
                <LotteryOfTheDay side={side} lottery={lottery} mode={mode} timeLeft={timeLeft} />
            </div>

            <div className="col-lg-12">
                <LotteryHistory mode={mode} />
            </div>
        </React.Fragment>
    );
}
