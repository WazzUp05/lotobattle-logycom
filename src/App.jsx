'use strict';

const Route = ReactRouterDOM.Route;

const UpdateContext = React.createContext(false);

const MOCK_DATA = {
    mode: 2, // 0 - нужна регистрация, 1 - сегодня не проводится, 2 - проводится
    side: 0, // сторона, 0 - не выбрана, 1 - светлая, 2 - темная
    timeLeft: 50000, // осталось времени
    lottery: {
        name: '6/49',
        img: '../assets/img/6-49.png',
        progress: {
            // прогресс покупки лотерей
            current: 500,
            max: 1000,
        },
    },
};

const App = () => {
    const [showRegister, setShowRegister] = React.useState(false);
    const [showClosed, setShowClosed] = React.useState(false);
    const [info, setInfo] = React.useState('');

    const [mode, setMode] = React.useState(0);
    const [bgInfo, setBgInfo] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);
    const [colorBg, setColorBg] = React.useState('');
    const [mainColor, setMainColor] = React.useState('');
    const [updateContext, setUpdateContext] = React.useState(0);

    //Проверка на мобильные устройства.
    function checkMobileDevice() {
        if (screen.width <= 1024 || window.innerWidth <= 1024) {
            return true;
        } else {
            return false;
        }
    }

    let whatPictures;
    if (updateContext === 1) {
        whatPictures = `url(${
            checkMobileDevice()
                ? '../assets/img/main-bg-blue-mobile.png'
                : '../assets/img/main-bg-blue.png'
        })`;
        document.documentElement.style.setProperty('--theme-color', `var(--color-blue)`);
    } else if (updateContext === 2) {
        whatPictures = `url(${
            checkMobileDevice()
                ? '../assets/img/main-bg-red-mobile.png'
                : '../assets/img/main-bg-red.png'
        })`;
        document.documentElement.style.setProperty('--theme-color', `var(--color-red)`);
    } else {
        whatPictures = `url(${
            checkMobileDevice()
                ? '../assets/img/main-bg-bluered-mobile.png'
                : '../assets/img/main-bg-bluered.png'
        })`;
    }

    React.useEffect(() => {
        $.ajax({
            url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
            type: 'GET',
            data: { srv: 'bgStart', token: token, tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6' },
            dataType: 'Object',
            async: true,
            success: function () {},
            error: function () {},
            complete: function (data) {
                let result = JSON.parse(data.responseText);
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
                        const mode = result.mode;
                        $.ajax({
                            url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
                            type: 'GET',
                            data: {
                                srv: 'bgInfo',
                                token: token,
                                tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6',
                            },
                            dataType: 'Object',
                            success: function success() {},
                            error: function error() {},
                            complete: function complete(data) {
                                var result = JSON.parse(data.responseText);
                                setMode(mode);
                                setBgInfo(result);
                                // console.log(result);
                            },
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
                                        tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6',
                                    },
                                    dataType: 'Object',
                                    success: function () {},
                                    error: function () {},
                                    complete: function (data) {
                                        let result = JSON.parse(data.responseText);

                                        setMode(1);
                                        setBgInfo(result);
                                    },
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
                                        tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6',
                                    },
                                    dataType: 'Object',
                                    success: function () {},
                                    error: function () {},
                                    complete: function (data) {
                                        let result = JSON.parse(data.responseText);

                                        setMode(2);
                                        setBgInfo(result);
                                    },
                                });
                                break;
                            case 3:
                                // console.log('Акция открыта');
                                $.ajax({
                                    url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
                                    type: 'GET',
                                    data: {
                                        srv: 'bgInfo',
                                        tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6',
                                    },
                                    dataType: 'Object',
                                    success: function () {},
                                    error: function () {},
                                    complete: function (data) {
                                        let result = JSON.parse(data.responseText);

                                        setMode(3);
                                        setBgInfo(result);
                                    },
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
                                        tmUserId: '17A59A4DA5CB3602F3B76142DEDA7AB6',
                                    },
                                    dataType: 'Object',
                                    success: function () {},
                                    error: function () {},
                                    complete: function (data) {
                                        let result = JSON.parse(data.responseText);
                                        setMode(6);
                                        setBgInfo(result);
                                    },
                                });
                                break;
                        }
                    }
                }
            },
        });
    }, []);

    colorBg.length !== 0 &&
        document.documentElement.style.setProperty('--theme-color-bg', `#${colorBg}`);
    mainColor.length !== 0 &&
        document.documentElement.style.setProperty('--theme-color-main', `#${mainColor}`);

    if (isLoading) {
        return (
            <div className="preloader">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <ReactRouterDOM.HashRouter>
            <UpdateContext.Provider value={[updateContext, setUpdateContext]}>
                <div className="app">
                    {MOCK_DATA.mode === 0 && (
                        <Modal
                            title={'<#trn_войдите или зарегистрируйтесь>'}
                            desc={'<#trn_Для участия в лотобитве, войдите или зарегистрируйтесь.>'}
                            isButton
                            show={true}
                        />
                    )}
                    {MOCK_DATA.mode === 1 && (
                        <Modal
                            title={'<#trn_Сегодня лотобитва не проводится>'}
                            desc={'<#trn_Следите за новостями, мы сообщим о следующей лотобитве.>'}
                            show={true}
                        />
                    )}
                    <section
                        className="lotobattle"
                        style={{
                            backgroundImage: `url(${
                                checkMobileDevice()
                                    ? '../assets/img/header-bg-mobile.png'
                                    : '../assets/img/header-bg.png'
                            }), ${whatPictures}`,
                        }}
                    >
                        <div className="lotobattle__wrapper">
                            <div className="container">
                                <div className="row">
                                    <Main
                                        side={MOCK_DATA.side}
                                        timeLeft={MOCK_DATA.timeLeft}
                                        lottery={MOCK_DATA.lottery}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </UpdateContext.Provider>
        </ReactRouterDOM.HashRouter>
    );
};

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
