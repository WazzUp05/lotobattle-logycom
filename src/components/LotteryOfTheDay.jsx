'use strict';

function LotteryOfTheDay({ side, lottery, timeLeft }) {
    const [updateContext, setUpdateContext] = React.useContext(UpdateContext);
    const [intervalToChange, setIntervalToChange] = React.useState(timeLeft);

    const changeSide = (side) => {
        setUpdateContext(side);
    };

    // React.useEffect(() => {
    //     if (mode === 3 || mode === 2 || mode === 1 || mode === 6) {
    //         $.ajax({
    //             url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
    //             type: 'GET',
    //             data: { srv: 'bgInfo', token: token, tmUserId: 'CFFA9DF4A2AE50D88C0DBA31EAC2C9AB' },
    //             dataType: 'Object',
    //             success: function () {},
    //             error: function () {},
    //             complete: function (data) {
    //                 let result = JSON.parse(data.responseText);

    //                 // console.log(result);
    //                 setInfo(result);
    //             },
    //         });
    //     }
    // }, [mode]);

    let bgSide;
    if (updateContext === 1) {
        bgSide = `url('../assets/img/side-blue.png')`;
    } else if (updateContext === 2) {
        bgSide = `url('../assets/img/side-red.png')`;
    } else bgSide = `url('../assets/img/side-default.png')`;

    React.useEffect(() => {
        const timer =
            intervalToChange > 0 &&
            setInterval(() => setIntervalToChange(intervalToChange - 1), 1000);

        return () => clearInterval(timer);
    }, [intervalToChange]);

    const hours = Math.floor(intervalToChange / 60 / 60);
    const minutes = Math.floor(intervalToChange / 60) - hours * 60;

    const procentComplited = (current, max) => {
        return Math.floor((current / max) * 100);
    };

    const widthProgressLottery = procentComplited(lottery.progress.current, lottery.progress.max);

    return (
        <React.Fragment>
            <div className="lotteryOfTheDay">
                <div className="lotteryOfTheDay__header">
                    <h2 className="lotteryOfTheDay__title">лотобитва дня</h2>
                    <div className="lotteryOfTheDay__time">
                        осталось<br></br>
                        <span>
                            {hours} ч. {minutes} м.
                        </span>
                    </div>
                </div>
                <div className="lotteryOfTheDay__body">
                    <div className="lotteryOfTheDay__left-wrapper">
                        <div
                            className="lotteryOfTheDay__left"
                            style={{
                                backgroundImage: bgSide,
                            }}
                        >
                            <img
                                src={lottery.img}
                                className="img-fluid lotteryOfTheDay__lottery"
                                alt=""
                            />
                            {updateContext !== 0 && (
                                <p className="lotteryOfTheDay__side">
                                    {updateContext === 1
                                        ? 'ты на светлой стороне'
                                        : 'ты на темной стороне'}
                                </p>
                            )}
                        </div>

                        {updateContext !== 0 &&
                            (updateContext === 2 ? (
                                <button
                                    className="main-button main-button--blue"
                                    onClick={() => changeSide(1)}
                                >
                                    сменить сторону
                                </button>
                            ) : (
                                <button
                                    className="main-button main-button--red"
                                    onClick={() => changeSide(2)}
                                >
                                    сменить сторону
                                </button>
                            ))}
                    </div>

                    {updateContext === 0 ? (
                        <div className="lotteryOfTheDay__right">
                            <h2 className="lotteryOfTheDay__name">Выбери сторону</h2>
                            <div className="lotteryOfTheDay__btns">
                                <button
                                    className="main-button main-button--blue"
                                    onClick={() => changeSide(1)}
                                >
                                    Светлая
                                </button>
                                <button
                                    className="main-button main-button--red"
                                    onClick={() => changeSide(2)}
                                >
                                    Темная
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="lotteryOfTheDay__right">
                            <h2 className="lotteryOfTheDay__name">Купи билеты {lottery.name}</h2>
                            <p className="lotteryOfTheDay__desc">
                                Минимальная сумма для участия {lottery.progress.max} ₸
                            </p>
                            <div className="progress-wrapper">
                                <div className="progress-bar-wrapper">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `calc(${widthProgressLottery}% + 2px)` }}
                                    >
                                        <div className="progress-text">
                                            <span>
                                                <b>{lottery.progress.current} ₸</b> /{' '}
                                                {lottery.progress.max} ₸
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="main-button main-button--theme">К лотерее</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="lotteryOfTheDay">
                <div className="lotteryOfTheDay__header">
                    <h2 className="lotteryOfTheDay__title">лотобитва дня</h2>
                    <div className="lotteryOfTheDay__time">
                        осталось<br></br>
                        <span>
                            {hours} ч. {minutes} м.
                        </span>
                    </div>
                </div>
                <div className="lotteryOfTheDay__body">
                    <div
                        className="lotteryOfTheDay__left"
                        style={{
                            backgroundImage: bgSide,
                        }}
                    >
                        <img
                            src={lottery.img}
                            className="img-fluid lotteryOfTheDay__lottery"
                            alt=""
                        />
                        {updateContext !== 0 && (
                            <p className="lotteryOfTheDay__side">
                                {updateContext === 1
                                    ? 'ты на светлой стороне'
                                    : 'ты на темной стороне'}
                            </p>
                        )}
                    </div>

                    <div className="lotteryOfTheDay__right">
                        <h2 className="lotteryOfTheDay__name">Ты участвуешь в битве дня</h2>
                        <p className="lotteryOfTheDay__desc">
                            А теперь можно докупить еще билетов, чтобы увеличить шансы на победу
                            вашей команды, а также свою потенциальную награду.
                        </p>

                        <h2 className="lotteryOfTheDay__awards-title">Заработанные награды</h2>
                        <div className="awards__items">
                            <div className="awards__item active">
                                <img
                                    src="../../assets/img/award.png"
                                    className="awards__item-img"
                                    alt=""
                                />
                                <span className="awards__item-count">x1</span>
                            </div>
                            <div className="awards__item">
                                <img
                                    src="../../assets/img/award.png"
                                    className="awards__item-img"
                                    alt=""
                                />
                                <span className="awards__item-count">x1</span>
                            </div>
                            <div className="awards__item">
                                <img
                                    src="../../assets/img/award.png"
                                    className="awards__item-img"
                                    alt=""
                                />
                                <span className="awards__item-count">x1</span>
                            </div>
                            <div className="awards__item">
                                <img
                                    src="../../assets/img/award.png"
                                    className="awards__item-img"
                                    alt=""
                                />
                                <span className="awards__item-count">x1</span>
                            </div>
                            <div className="awards__item">
                                <img
                                    src="../../assets/img/award.png"
                                    className="awards__item-img"
                                    alt=""
                                />
                                <span className="awards__item-count">x1</span>
                            </div>
                        </div>

                        <button className="main-button main-button--theme">
                            увеличить шансы и награду
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
