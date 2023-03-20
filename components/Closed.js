'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Closed(_ref) {
    var showClosed = _ref.showClosed,
        title = _ref.title,
        desc = _ref.desc,
        isButton = _ref.isButton;

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    var closeModal = function closeModal() {
        document.querySelector('body').style.removeProperty('overflow');
        document.querySelector('body').removeAttribute('data-modalOpen');
        document.querySelector('body').classList.remove('modal__is-opened');
        if (backHome) {
            window.location.href = '<#SelfURL>/akcii';
        }
        setOpen(false);
    };

    React.useEffect(function () {
        setOpen(showClosed);
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('body').setAttribute('data-modalOpen', true);
        document.querySelector('body').classList.add('modal__is-opened');
    }, [showClosed]);

    return React.createElement(
        'div',
        { className: 'modal-lotobattle ' + (open ? 'show' : ''), onClick: closeModal },
        React.createElement(
            'div',
            {
                className: 'registr',
                onClick: function onClick(e) {
                    e.stopPropagation();
                }
            },
            React.createElement(
                'div',
                { className: 'close', onClick: closeModal },
                React.createElement(
                    'svg',
                    {
                        className: 'd-none d-lg-block',
                        width: '30',
                        height: '30',
                        viewBox: '0 0 30 30',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg'
                    },
                    React.createElement('path', {
                        d: 'M30 28.4063L1.65842 0L0.119715 1.59371L28.4613 30L30 28.4063Z',
                        fill: 'white'
                    }),
                    React.createElement('path', {
                        d: 'M0 28.4063L28.3416 0L29.8803 1.59371L1.53871 30L0 28.4063Z',
                        fill: 'white'
                    })
                ),
                React.createElement(
                    'svg',
                    {
                        className: 'd-block d-lg-none',
                        width: '18',
                        height: '18',
                        viewBox: '0 0 18 18',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg'
                    },
                    React.createElement('path', {
                        d: 'M0.461558 2.68883C-0.153536 2.07373 -0.153535 1.07646 0.461558 0.461356C1.07665 -0.153744 2.07392 -0.153744 2.68901 0.461356L17.5387 15.3112C18.1538 15.9263 18.1538 16.9236 17.5387 17.5387C16.9236 18.1538 15.9263 18.1538 15.3112 17.5387L0.461558 2.68883Z',
                        fill: 'white'
                    }),
                    React.createElement('path', {
                        d: 'M2.68877 17.5386C2.07368 18.1537 1.07641 18.1537 0.46132 17.5386C-0.153773 16.9235 -0.153773 15.9263 0.46132 15.3112L15.311 0.461325C15.9261 -0.153775 16.9233 -0.153775 17.5384 0.461325C18.1535 1.07643 18.1535 2.0737 17.5384 2.6888L2.68877 17.5386Z',
                        fill: 'white'
                    })
                )
            ),
            React.createElement(
                'h1',
                { className: 'registr__title' },
                title
            ),
            React.createElement(
                'p',
                { className: 'registr__description' },
                desc
            ),
            isButton && React.createElement(
                'a',
                { href: '<#SelfURL>/akcii', className: 'button-min', type: 'submit' },
                '<#trn_Войти>'
            )
        )
    );
}