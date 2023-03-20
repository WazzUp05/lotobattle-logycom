'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function LotteryOfTheDay(_ref) {
    var side = _ref.side,
        lottery = _ref.lottery,
        timeLeft = _ref.timeLeft;

    var _React$useContext = React.useContext(UpdateContext),
        _React$useContext2 = _slicedToArray(_React$useContext, 2),
        updateContext = _React$useContext2[0],
        setUpdateContext = _React$useContext2[1];

    var _React$useState = React.useState(timeLeft),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        intervalToChange = _React$useState2[0],
        setIntervalToChange = _React$useState2[1];

    var changeSide = function changeSide(side) {
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

    var bgSide = void 0;
    if (updateContext === 1) {
        bgSide = "url('../assets/img/side-blue.png')";
    } else if (updateContext === 2) {
        bgSide = "url('../assets/img/side-red.png')";
    } else bgSide = "url('../assets/img/side-default.png')";

    React.useEffect(function () {
        var timer = intervalToChange > 0 && setInterval(function () {
            return setIntervalToChange(intervalToChange - 1);
        }, 1000);

        return function () {
            return clearInterval(timer);
        };
    }, [intervalToChange]);

    var hours = Math.floor(intervalToChange / 60 / 60);
    var minutes = Math.floor(intervalToChange / 60) - hours * 60;

    var procentComplited = function procentComplited(current, max) {
        return Math.floor(current / max * 100);
    };

    var widthProgressLottery = procentComplited(lottery.progress.current, lottery.progress.max);

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "div",
            { className: "lotteryOfTheDay" },
            React.createElement(
                "div",
                { className: "lotteryOfTheDay__header" },
                React.createElement(
                    "h2",
                    { className: "lotteryOfTheDay__title" },
                    "\u043B\u043E\u0442\u043E\u0431\u0438\u0442\u0432\u0430 \u0434\u043D\u044F"
                ),
                React.createElement(
                    "div",
                    { className: "lotteryOfTheDay__time" },
                    "\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",
                    React.createElement("br", null),
                    React.createElement(
                        "span",
                        null,
                        hours,
                        " \u0447. ",
                        minutes,
                        " \u043C."
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "lotteryOfTheDay__body" },
                React.createElement(
                    "div",
                    { className: "lotteryOfTheDay__left-wrapper" },
                    React.createElement(
                        "div",
                        {
                            className: "lotteryOfTheDay__left",
                            style: {
                                backgroundImage: bgSide
                            }
                        },
                        React.createElement("img", {
                            src: lottery.img,
                            className: "img-fluid lotteryOfTheDay__lottery",
                            alt: ""
                        }),
                        updateContext !== 0 && React.createElement(
                            "p",
                            { className: "lotteryOfTheDay__side" },
                            updateContext === 1 ? 'ты на светлой стороне' : 'ты на темной стороне'
                        )
                    ),
                    updateContext !== 0 && (updateContext === 2 ? React.createElement(
                        "button",
                        {
                            className: "main-button main-button--blue",
                            onClick: function onClick() {
                                return changeSide(1);
                            }
                        },
                        "\u0441\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u0443"
                    ) : React.createElement(
                        "button",
                        {
                            className: "main-button main-button--red",
                            onClick: function onClick() {
                                return changeSide(2);
                            }
                        },
                        "\u0441\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u043E\u0440\u043E\u043D\u0443"
                    ))
                ),
                updateContext === 0 ? React.createElement(
                    "div",
                    { className: "lotteryOfTheDay__right" },
                    React.createElement(
                        "h2",
                        { className: "lotteryOfTheDay__name" },
                        "\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u0442\u043E\u0440\u043E\u043D\u0443"
                    ),
                    React.createElement(
                        "div",
                        { className: "lotteryOfTheDay__btns" },
                        React.createElement(
                            "button",
                            {
                                className: "main-button main-button--blue",
                                onClick: function onClick() {
                                    return changeSide(1);
                                }
                            },
                            "\u0421\u0432\u0435\u0442\u043B\u0430\u044F"
                        ),
                        React.createElement(
                            "button",
                            {
                                className: "main-button main-button--red",
                                onClick: function onClick() {
                                    return changeSide(2);
                                }
                            },
                            "\u0422\u0435\u043C\u043D\u0430\u044F"
                        )
                    )
                ) : React.createElement(
                    "div",
                    { className: "lotteryOfTheDay__right" },
                    React.createElement(
                        "h2",
                        { className: "lotteryOfTheDay__name" },
                        "\u041A\u0443\u043F\u0438 \u0431\u0438\u043B\u0435\u0442\u044B ",
                        lottery.name
                    ),
                    React.createElement(
                        "p",
                        { className: "lotteryOfTheDay__desc" },
                        "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u0438\u044F ",
                        lottery.progress.max,
                        " \u20B8"
                    ),
                    React.createElement(
                        "div",
                        { className: "progress-wrapper" },
                        React.createElement(
                            "div",
                            { className: "progress-bar-wrapper" },
                            React.createElement(
                                "div",
                                {
                                    className: "progress-bar",
                                    style: { width: "calc(" + widthProgressLottery + "% + 2px)" }
                                },
                                React.createElement(
                                    "div",
                                    { className: "progress-text" },
                                    React.createElement(
                                        "span",
                                        null,
                                        React.createElement(
                                            "b",
                                            null,
                                            lottery.progress.current,
                                            " \u20B8"
                                        ),
                                        " /",
                                        ' ',
                                        lottery.progress.max,
                                        " \u20B8"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "button",
                        { className: "main-button main-button--theme" },
                        "\u041A \u043B\u043E\u0442\u0435\u0440\u0435\u0435"
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { className: "lotteryOfTheDay" },
            React.createElement(
                "div",
                { className: "lotteryOfTheDay__header" },
                React.createElement(
                    "h2",
                    { className: "lotteryOfTheDay__title" },
                    "\u043B\u043E\u0442\u043E\u0431\u0438\u0442\u0432\u0430 \u0434\u043D\u044F"
                ),
                React.createElement(
                    "div",
                    { className: "lotteryOfTheDay__time" },
                    "\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",
                    React.createElement("br", null),
                    React.createElement(
                        "span",
                        null,
                        hours,
                        " \u0447. ",
                        minutes,
                        " \u043C."
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "lotteryOfTheDay__body" },
                React.createElement(
                    "div",
                    {
                        className: "lotteryOfTheDay__left",
                        style: {
                            backgroundImage: bgSide
                        }
                    },
                    React.createElement("img", {
                        src: lottery.img,
                        className: "img-fluid lotteryOfTheDay__lottery",
                        alt: ""
                    }),
                    updateContext !== 0 && React.createElement(
                        "p",
                        { className: "lotteryOfTheDay__side" },
                        updateContext === 1 ? 'ты на светлой стороне' : 'ты на темной стороне'
                    )
                ),
                React.createElement(
                    "div",
                    { className: "lotteryOfTheDay__right" },
                    React.createElement(
                        "h2",
                        { className: "lotteryOfTheDay__name" },
                        "\u0422\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0448\u044C \u0432 \u0431\u0438\u0442\u0432\u0435 \u0434\u043D\u044F"
                    ),
                    React.createElement(
                        "p",
                        { className: "lotteryOfTheDay__desc" },
                        "\u0410 \u0442\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u043D\u043E \u0434\u043E\u043A\u0443\u043F\u0438\u0442\u044C \u0435\u0449\u0435 \u0431\u0438\u043B\u0435\u0442\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0448\u0430\u043D\u0441\u044B \u043D\u0430 \u043F\u043E\u0431\u0435\u0434\u0443 \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u0432\u043E\u044E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u043D\u0430\u0433\u0440\u0430\u0434\u0443."
                    ),
                    React.createElement(
                        "h2",
                        { className: "lotteryOfTheDay__awards-title" },
                        "\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u044B"
                    ),
                    React.createElement(
                        "div",
                        { className: "awards__items" },
                        React.createElement(
                            "div",
                            { className: "awards__item active" },
                            React.createElement("img", {
                                src: "../../assets/img/award.png",
                                className: "awards__item-img",
                                alt: ""
                            }),
                            React.createElement(
                                "span",
                                { className: "awards__item-count" },
                                "x1"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "awards__item" },
                            React.createElement("img", {
                                src: "../../assets/img/award.png",
                                className: "awards__item-img",
                                alt: ""
                            }),
                            React.createElement(
                                "span",
                                { className: "awards__item-count" },
                                "x1"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "awards__item" },
                            React.createElement("img", {
                                src: "../../assets/img/award.png",
                                className: "awards__item-img",
                                alt: ""
                            }),
                            React.createElement(
                                "span",
                                { className: "awards__item-count" },
                                "x1"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "awards__item" },
                            React.createElement("img", {
                                src: "../../assets/img/award.png",
                                className: "awards__item-img",
                                alt: ""
                            }),
                            React.createElement(
                                "span",
                                { className: "awards__item-count" },
                                "x1"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "awards__item" },
                            React.createElement("img", {
                                src: "../../assets/img/award.png",
                                className: "awards__item-img",
                                alt: ""
                            }),
                            React.createElement(
                                "span",
                                { className: "awards__item-count" },
                                "x1"
                            )
                        )
                    ),
                    React.createElement(
                        "button",
                        { className: "main-button main-button--theme" },
                        "\u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0448\u0430\u043D\u0441\u044B \u0438 \u043D\u0430\u0433\u0440\u0430\u0434\u0443"
                    )
                )
            )
        )
    );
}