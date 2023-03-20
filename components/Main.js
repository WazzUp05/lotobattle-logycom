'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Awards(params) {
    return React.createElement(
        "div",
        { className: "awards" },
        React.createElement(
            "h2",
            { className: "awards__title" },
            "\u0417\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u044B"
        ),
        React.createElement(
            "div",
            { className: "awards__items" },
            React.createElement(
                "div",
                { className: "awards__item active" },
                React.createElement("img", { src: "../../assets/img/award.png", className: "awards__item-img", alt: "" }),
                React.createElement(
                    "span",
                    { className: "awards__item-count" },
                    "x1"
                )
            ),
            React.createElement(
                "div",
                { className: "awards__item active" },
                React.createElement("img", { src: "../../assets/img/award.png", className: "awards__item-img", alt: "" }),
                React.createElement(
                    "span",
                    { className: "awards__item-count" },
                    "x1"
                )
            ),
            React.createElement(
                "div",
                { className: "awards__item active" },
                React.createElement("img", { src: "../../assets/img/award.png", className: "awards__item-img", alt: "" }),
                React.createElement(
                    "span",
                    { className: "awards__item-count" },
                    "x1"
                )
            )
        ),
        React.createElement(
            "button",
            { className: "main-button" },
            "\u0437\u0430\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u044B"
        )
    );
}

function ModalRules(_ref) {
    var isOpen = _ref.isOpen,
        onClose = _ref.onClose;

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    var closeModal = function closeModal() {
        document.querySelector('body').style.removeProperty('overflow');
        document.querySelector('body').removeAttribute('data-modalOpen');
        document.querySelector('body').classList.remove('modal__is-opened');
        setOpen(false);
        onClose(false);
    };

    React.useEffect(function () {
        if (isOpen) {
            setOpen(true);
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('body').setAttribute('data-modalOpen', true);
            document.querySelector('body').classList.add('modal__is-opened');
        }
    }, [isOpen]);

    return React.createElement(
        "div",
        { className: "modal-rules " + (open ? 'show' : ''), onClick: closeModal },
        React.createElement(
            "div",
            {
                className: "modal-rules__content",
                onClick: function onClick(e) {
                    e.stopPropagation();
                }
            },
            React.createElement(
                "div",
                { className: "close", onClick: closeModal },
                React.createElement(
                    "svg",
                    {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    },
                    React.createElement("path", {
                        d: "M0.717979 4.18263C-0.238833 3.22581 -0.238833 1.67449 0.717979 0.717665C1.67479 -0.239158 3.22609 -0.239158 4.1829 0.717665L27.2824 23.8174C28.2392 24.7742 28.2392 26.3256 27.2824 27.2824C26.3256 28.2392 24.7743 28.2392 23.8175 27.2824L0.717979 4.18263Z",
                        fill: "white"
                    }),
                    React.createElement("path", {
                        d: "M4.18253 27.2823C3.22572 28.2392 1.67442 28.2392 0.717609 27.2823C-0.239203 26.3255 -0.239203 24.7742 0.717609 23.8174L23.8171 0.717617C24.7739 -0.239206 26.3252 -0.239206 27.282 0.717617C28.2388 1.67444 28.2388 3.22576 27.282 4.18258L4.18253 27.2823Z",
                        fill: "white"
                    })
                )
            ),
            React.createElement(
                "div",
                { className: "modal-rules__wrapper" },
                React.createElement(
                    "div",
                    { className: "modal-rules__left" },
                    React.createElement(
                        "h2",
                        { className: "modal-rules__title" },
                        "\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043B\u043E\u0442\u043E\u0431\u0438\u0442\u0432\u0430?"
                    ),
                    React.createElement(
                        "p",
                        { className: "modal-rules__description" },
                        "\u041B\u043E\u0442\u043E\u0431\u0438\u0442\u0432\u0430 - \u044D\u0442\u043E \u0438\u0433\u0440\u0430 \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0432\u0441\u0435 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0434\u0435\u043B\u044F\u0442\u0441\u044F \u043D\u0430 \u0434\u0432\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B."
                    ),
                    React.createElement(
                        "h3",
                        { className: "modal-rules__description-title" },
                        "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B:"
                    ),
                    React.createElement(
                        "p",
                        { className: "modal-rules__description" },
                        "\u041A\u0430\u0436\u0434\u0430\u044F \u043B\u043E\u0442\u043E\u0431\u0438\u0442\u0432\u0430 \u0434\u043B\u0438\u0442\u0441\u044F \u043E\u0434\u0438\u043D \u0434\u0435\u043D\u044C \u0438 \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0442\u0438\u0440\u0430\u0436\u043D\u044B\u0445 \u043B\u043E\u0442\u0435\u0440\u0435\u0439."
                    ),
                    React.createElement(
                        "p",
                        { className: "modal-rules__description" },
                        "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0438\u0433\u0440\u044B \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u044E\u0442 \u043B\u043E\u0442\u0435\u0440\u0435\u0439\u043D\u044B\u0435 \u0431\u0438\u043B\u0435\u0442\u044B."
                    ),
                    React.createElement(
                        "p",
                        { className: "modal-rules__description" },
                        "\u041F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441\u0443\u043C\u043C\u0430 \u0432\u044B\u0438\u0433\u0440\u044B\u0448\u0435\u0439, \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0442\u0438\u0440\u0430\u0436\u0430, \u0431\u0443\u0434\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435."
                    ),
                    React.createElement(
                        "p",
                        { className: "modal-rules__description" },
                        "\u0412 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u044B, \u043F\u043E\u0431\u0435\u0434\u0438\u0432\u0448\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441\u044B: \u0447\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u043A\u043B\u0430\u0434, \u0442\u0435\u043C \u0446\u0435\u043D\u043D\u0435\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u0430."
                    ),
                    React.createElement(
                        "h2",
                        { className: "modal-rules__title" },
                        "\u041A\u043E\u0433\u0434\u0430 \u044F \u043F\u043E\u043B\u0443\u0447\u0443 \u043D\u0430\u0433\u0440\u0430\u0434\u0443?"
                    ),
                    React.createElement(
                        "p",
                        { className: "modal-rules__description" },
                        "\u0415\u0441\u043B\u0438 \u0432\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432\u044B\u0438\u0433\u0440\u0430\u0435\u0442 \u0432 \u043B\u043E\u0442\u043E\u0431\u0438\u0442\u0432\u0435, \u0442\u043E \u0437\u0430\u0431\u0440\u0430\u0442\u044C \u043D\u0430\u0433\u0440\u0430\u0434\u0443 \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043B\u043E\u0442\u043E\u0431\u0438\u0442\u0432\u044B. \u041E\u0431\u044B\u0447\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u041C\u041C-\u041C\u041C \u043C\u0438\u043D\u0443\u0442 \u043F\u043E\u0441\u043B\u0435 \u0442\u0438\u0440\u0430\u0436\u0430."
                    ),
                    React.createElement(
                        "h2",
                        { className: "modal-rules__title" },
                        "\u042F \u0437\u0430\u0431\u0440\u0430\u043B \u043D\u0430\u0433\u0440\u0430\u0434\u0443 \u0441 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441\u043E\u043C, \u0433\u0434\u0435 \u043C\u043D\u0435 \u0435\u0433\u043E \u043D\u0430\u0439\u0442\u0438?"
                    ),
                    React.createElement(
                        "p",
                        { className: "modal-rules__description" },
                        "\u0412\u0441\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441\u044B \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0439\u0442\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044C, \u043D\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441\u044B."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "modal-rules__right" },
                    React.createElement(
                        "h2",
                        { className: "modal-rules__title" },
                        "\u041A\u0430\u043A\u0443\u044E \u043D\u0430\u0433\u0440\u0430\u0434\u0443 \u044F \u043F\u043E\u043B\u0443\u0447\u0443?."
                    ),
                    React.createElement(
                        "p",
                        { className: "modal-rules__description" },
                        "\u0415\u0441\u043B\u0438 \u0442\u0432\u043E\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430 \u0432\u044B\u0438\u0433\u0440\u0430\u043B\u0430, \u0442\u043E \u0432 \u043D\u0430\u0433\u0440\u0430\u0434\u0443 \u0442\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441\u044B. \u0427\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0431\u0438\u043B\u0435\u0442\u043E\u0432 \u043A\u0443\u043F\u0438\u0448\u044C, \u0442\u0435\u043C \u0446\u0435\u043D\u043D\u0435\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u0430."
                    ),
                    React.createElement(
                        "table",
                        { className: "modal-rules__table" },
                        React.createElement(
                            "thead",
                            null,
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "th",
                                    null,
                                    "\u041A\u0443\u043F\u043B\u0435\u043D\u043E \u0431\u0438\u043B\u0435\u0442\u043E\u0432 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "\u041D\u0430\u0433\u0440\u0430\u0434\u0430"
                                )
                            )
                        ),
                        React.createElement(
                            "tbody",
                            null,
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "50 000"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "\u0418\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u044B\u0439 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "30 000"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "\u0410\u043B\u043C\u0430\u0437\u043D\u044B\u0439 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "10 000"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "\u0417\u043E\u043B\u043E\u0442\u043E\u0439 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "5 000"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "\u0421\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441"
                                )
                            ),
                            React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    "1 000"
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    "\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0439 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "h2",
                        { className: "modal-rules__title" },
                        "\u0427\u0442\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u0432 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441\u0430\u0445?"
                    ),
                    React.createElement(
                        "p",
                        { className: "modal-rules__description" },
                        "\u0412 \u043A\u0430\u0436\u0434\u043E\u043C \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441\u0435 \u0435\u0441\u0442\u044C \u0431\u043E\u043D\u0443\u0441\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u044C \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043B\u043E\u0442\u0435\u0440\u0435\u0439. \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0431\u043E\u043D\u0443\u0441\u043E\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0440\u0435\u0434\u043A\u043E\u0441\u0442\u0438 \u043B\u043E\u0442\u043E\u0431\u043E\u043A\u0441\u0430 \u0438 \u0432\u0430\u0448\u0435\u0439 \u0443\u0434\u0430\u0447\u0438."
                    )
                )
            )
        )
    );
}

function Main(_ref2) {
    var mode = _ref2.mode,
        side = _ref2.side,
        lottery = _ref2.lottery,
        timeLeft = _ref2.timeLeft;

    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        isOpen = _React$useState4[0],
        setIsOpen = _React$useState4[1];

    var onClose = function onClose(value) {
        setIsOpen(value);
    };

    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            "div",
            { className: "col-lg-12" },
            React.createElement("img", {
                src: "../../assets/img/lotobattle-logo=header-desktop.png",
                alt: "",
                className: "lotobattle__img img-fluid"
            }),
            React.createElement(
                "h1",
                { className: "lotobattle__title" },
                "\u0412\u044B\u0431\u0438\u0440\u0430\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0443, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0439 \u0432 \u0431\u0438\u0442\u0432\u0435 \u0434\u043D\u044F",
                React.createElement("br", null),
                React.createElement(
                    "span",
                    null,
                    "\u0438 \u0432\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0439 \u043F\u0440\u0438\u0437\u044B"
                )
            ),
            React.createElement(
                "button",
                { onClick: function onClick() {
                        return setIsOpen(true);
                    }, className: "lotobattle__button main-button" },
                "\u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B"
            )
        ),
        React.createElement(ModalRules, { onClose: onClose, isOpen: isOpen }),
        React.createElement(
            "div",
            { className: "col-lg-12" },
            React.createElement(Awards, null)
        ),
        React.createElement(
            "div",
            { className: "col-lg-12" },
            React.createElement(LotteryOfTheDay, { side: side, lottery: lottery, mode: mode, timeLeft: timeLeft })
        ),
        React.createElement(
            "div",
            { className: "col-lg-12" },
            React.createElement(LotteryHistory, { mode: mode })
        )
    );
}