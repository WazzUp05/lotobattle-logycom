'use strict';

var Link = ReactRouterDOM.Link;

var MOCK_HISTORY = [{
    side_win: 1, // сторона которая выйграла, 0 - светлая, 1 - темная
    date: '30.09.2022', // дата
    lottery_img: '../../assets/img/6-49.png',
    win_money: {
        light: '23 000 000',
        dark: '60 000 000'
    },
    result: 2 // результат, 0 - не учавствовал, 1 - проиграл, 2 - выйграл
}, {
    side_win: 0, // сторона которая выйграла, 0 - светлая, 1 - темная
    date: '29.09.2022', // дата
    lottery_img: '../../assets/img/6-49.png',
    win_money: {
        light: '80 000 000',
        dark: '40 000 000'
    },
    result: 0 // результат, 0 - не учавствовал, 1 - проиграл, 2 - выйграл
}, {
    side_win: 1, // сторона которая выйграла, 0 - светлая, 1 - темная
    date: '28.09.2022', // дата
    lottery_img: '../../assets/img/6-49.png',
    win_money: {
        light: '23 000 000',
        dark: '60 000 000'
    },
    result: 1 // результат, 0 - не учавствовал, 1 - проиграл, 2 - выйграл
}];

var LotteryHistoryItem = function LotteryHistoryItem(_ref) {
    var sideWin = _ref.sideWin,
        date = _ref.date,
        lottery_img = _ref.lottery_img,
        win_money = _ref.win_money,
        result = _ref.result;

    return React.createElement(
        'div',
        {
            className: 'lottery-history-item ' + (sideWin === 0 ? 'lottery-history-item--light' : '')
        },
        React.createElement(
            'div',
            { className: 'lottery-history-item__left' },
            React.createElement(
                'div',
                { className: 'lottery-history-item__header' },
                React.createElement(
                    'div',
                    { className: 'lottery-history-item__header-left' },
                    React.createElement(
                        'h2',
                        { className: 'lottery-history-item__title' },
                        '\u041F\u043E\u0431\u0435\u0434\u0430 ',
                        sideWin === 0 ? 'СВЕТЛОЙ СТОРОНЫ' : 'ТЕМНОЙ СТОРОНЫ'
                    ),
                    React.createElement(
                        'p',
                        { className: 'lottery-history-item__date' },
                        date
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'lottery-history-item__img' },
                    React.createElement('img', { src: lottery_img, alt: '' })
                )
            ),
            React.createElement(
                'div',
                { className: 'lottery-history-item__body' },
                React.createElement(
                    'p',
                    { className: 'lottery-history-item__body-title' },
                    '\u0412\u044B\u0438\u0433\u0440\u0430\u043D\u043E:'
                ),
                React.createElement(
                    'div',
                    { className: 'lottery-history-item__body-wins' },
                    React.createElement(
                        'p',
                        null,
                        '\u0441\u0432\u0435\u0442\u043B\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439',
                        React.createElement('br', null),
                        React.createElement(
                            'span',
                            null,
                            win_money.light,
                            ' \u20B8'
                        )
                    ),
                    React.createElement(
                        'p',
                        null,
                        '\u0442\u0435\u043C\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439',
                        React.createElement('br', null),
                        React.createElement(
                            'span',
                            null,
                            win_money.dark,
                            ' \u20B8'
                        )
                    )
                )
            ),
            result === 0 && React.createElement(
                'p',
                { className: 'lottery-history-item__result' },
                '\u0412\u044B \u043D\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u043B\u0438'
            ),
            result === 1 && React.createElement(
                'p',
                { className: 'lottery-history-item__result' },
                '\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:',
                ' ',
                React.createElement(
                    'span',
                    null,
                    '\u043F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ',
                    React.createElement('img', { src: '../../assets/img/lose-icon.png', alt: '\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435' })
                )
            ),
            result === 2 && React.createElement(
                'p',
                { className: 'lottery-history-item__result' },
                '\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:',
                ' ',
                React.createElement(
                    'span',
                    null,
                    '\u043F\u043E\u0431\u0435\u0434\u0430 ',
                    React.createElement('img', { src: '../../assets/img/win-icon.svg', alt: '\u041F\u043E\u0431\u0435\u0434\u0430' })
                )
            )
        ),
        sideWin === 0 ? React.createElement('img', {
            src: '../../assets/img/sword-blue.png',
            alt: '',
            className: 'lottery-history-item__sword'
        }) : React.createElement('img', {
            src: '../../assets/img/sword-red.png',
            alt: '',
            className: 'lottery-history-item__sword'
        })
    );
};

function LotteryHistory(_ref2) {
    var mode = _ref2.mode;

    // React.useEffect(() => {
    //     if (mode === 1 || mode === 2 || mode === 3 || mode === 6) {
    //         $.ajax({
    //             url: 'https://rpo.logycom.kz/threemen/threemen.dll/srvNew',
    //             type: 'GET',
    //             data: {
    //                 srv: 'bgHistory',
    //                 token: token,
    //                 tmUserId: 'CFFA9DF4A2AE50D88C0DBA31EAC2C9AB',
    //             },
    //             dataType: 'Object',
    //             success: function () {},
    //             error: function () {},
    //             complete: function (data) {
    //                 let result = JSON.parse(data.responseText);

    //                 setHistory(result.array);
    //                 // console.log(result.array);
    //             },
    //         });
    //     }
    // }, [mode]);

    return React.createElement(
        'div',
        { className: 'lottery-history' },
        React.createElement(
            'h2',
            { className: 'lottery-history__title' },
            '<#trn_История лотобитв>'
        ),
        MOCK_HISTORY.length !== 0 && MOCK_HISTORY.map(function (item, index) {
            return React.createElement(LotteryHistoryItem, {
                key: index,
                sideWin: item.side_win,
                date: item.date,
                lottery_img: item.lottery_img,
                win_money: item.win_money,
                result: item.result
            });
        })
    );
}