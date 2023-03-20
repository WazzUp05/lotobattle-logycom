'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Modal(_ref) {
    var show = _ref.show,
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
        setOpen(show);
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('body').setAttribute('data-modalOpen', true);
        document.querySelector('body').classList.add('modal__is-opened');
    }, [show]);

    return React.createElement(
        'div',
        { className: 'modal-lotobattle ' + (open ? 'show' : ''), onClick: closeModal },
        React.createElement(
            'div',
            {
                className: 'modal-content',
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
                        width: '28',
                        height: '28',
                        viewBox: '0 0 28 28',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg'
                    },
                    React.createElement('path', {
                        d: 'M0.717979 4.18263C-0.238833 3.22581 -0.238833 1.67449 0.717979 0.717665C1.67479 -0.239158 3.22609 -0.239158 4.1829 0.717665L27.2824 23.8174C28.2392 24.7742 28.2392 26.3256 27.2824 27.2824C26.3256 28.2392 24.7743 28.2392 23.8175 27.2824L0.717979 4.18263Z',
                        fill: 'white'
                    }),
                    React.createElement('path', {
                        d: 'M4.18253 27.2823C3.22572 28.2392 1.67442 28.2392 0.717609 27.2823C-0.239203 26.3255 -0.239203 24.7742 0.717609 23.8174L23.8171 0.717617C24.7739 -0.239206 26.3252 -0.239206 27.282 0.717617C28.2388 1.67444 28.2388 3.22576 27.282 4.18258L4.18253 27.2823Z',
                        fill: 'white'
                    })
                )
            ),
            React.createElement(
                'h1',
                { className: 'modal-content__title' },
                title
            ),
            React.createElement(
                'p',
                { className: 'modal-content__description' },
                desc
            ),
            isButton && React.createElement(
                'a',
                { href: '<#SelfURL>/akcii', className: 'main-button', type: 'submit' },
                '<#trn_Войти>'
            )
        )
    );
}