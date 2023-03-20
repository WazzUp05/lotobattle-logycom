'use strict';

const Link = ReactRouterDOM.Link;

const MOCK_HISTORY = [
    {
        side_win: 1, // сторона которая выйграла, 0 - светлая, 1 - темная
        date: '30.09.2022', // дата
        lottery_img: '../../assets/img/6-49.png',
        win_money: {
            light: '23 000 000',
            dark: '60 000 000',
        },
        result: 2, // результат, 0 - не учавствовал, 1 - проиграл, 2 - выйграл
    },
    {
        side_win: 0, // сторона которая выйграла, 0 - светлая, 1 - темная
        date: '29.09.2022', // дата
        lottery_img: '../../assets/img/6-49.png',
        win_money: {
            light: '80 000 000',
            dark: '40 000 000',
        },
        result: 0, // результат, 0 - не учавствовал, 1 - проиграл, 2 - выйграл
    },
    {
        side_win: 1, // сторона которая выйграла, 0 - светлая, 1 - темная
        date: '28.09.2022', // дата
        lottery_img: '../../assets/img/6-49.png',
        win_money: {
            light: '23 000 000',
            dark: '60 000 000',
        },
        result: 1, // результат, 0 - не учавствовал, 1 - проиграл, 2 - выйграл
    },
];

const LotteryHistoryItem = ({ sideWin, date, lottery_img, win_money, result }) => {
    return (
        <div
            className={`lottery-history-item ${sideWin === 0 ? 'lottery-history-item--light' : ''}`}
        >
            <div className="lottery-history-item__left">
                <div className="lottery-history-item__header">
                    <div className="lottery-history-item__header-left">
                        <h2 className="lottery-history-item__title">
                            Победа {sideWin === 0 ? 'СВЕТЛОЙ СТОРОНЫ' : 'ТЕМНОЙ СТОРОНЫ'}
                        </h2>
                        <p className="lottery-history-item__date">{date}</p>
                    </div>
                    <div className="lottery-history-item__img">
                        <img src={lottery_img} alt="" />
                    </div>
                </div>
                <div className="lottery-history-item__body">
                    <p className="lottery-history-item__body-title">Выиграно:</p>
                    <div className="lottery-history-item__body-wins">
                        <p>
                            светлой стороной<br></br>
                            <span>{win_money.light} ₸</span>
                        </p>
                        <p>
                            темной стороной<br></br>
                            <span>{win_money.dark} ₸</span>
                        </p>
                    </div>
                </div>
                {result === 0 && <p className="lottery-history-item__result">Вы не участвовали</p>}
                {result === 1 && (
                    <p className="lottery-history-item__result">
                        Ваш результат:{' '}
                        <span>
                            поражение <img src="../../assets/img/lose-icon.png" alt="Поражение" />
                        </span>
                    </p>
                )}
                {result === 2 && (
                    <p className="lottery-history-item__result">
                        Ваш результат:{' '}
                        <span>
                            победа <img src="../../assets/img/win-icon.svg" alt="Победа" />
                        </span>
                    </p>
                )}
            </div>
            {sideWin === 0 ? (
                <img
                    src="../../assets/img/sword-blue.png"
                    alt=""
                    className="lottery-history-item__sword"
                />
            ) : (
                <img
                    src="../../assets/img/sword-red.png"
                    alt=""
                    className="lottery-history-item__sword"
                />
            )}
        </div>
    );
};

function LotteryHistory({ mode }) {
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

    return (
        <div className="lottery-history">
            <h2 className="lottery-history__title">{'<#trn_История лотобитв>'}</h2>
            {MOCK_HISTORY.length !== 0 &&
                MOCK_HISTORY.map((item, index) => {
                    return (
                        <LotteryHistoryItem
                            key={index}
                            sideWin={item.side_win}
                            date={item.date}
                            lottery_img={item.lottery_img}
                            win_money={item.win_money}
                            result={item.result}
                        />
                    );
                })}
        </div>
    );
}
