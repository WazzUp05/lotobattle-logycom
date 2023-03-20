'use strict';

function Modal({ show, title, desc, isButton }) {
    const [open, setOpen] = React.useState(false);

    const closeModal = () => {
        document.querySelector('body').style.removeProperty('overflow');
        document.querySelector('body').removeAttribute('data-modalOpen');
        document.querySelector('body').classList.remove('modal__is-opened');
        if (backHome) {
            window.location.href = '<#SelfURL>/akcii';
        }
        setOpen(false);
    };

    React.useEffect(() => {
        setOpen(show);
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('body').setAttribute('data-modalOpen', true);
        document.querySelector('body').classList.add('modal__is-opened');
    }, [show]);

    return (
        <div className={`modal-lotobattle ${open ? 'show' : ''}`} onClick={closeModal}>
            <div
                className="modal-content"
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
                <h1 className="modal-content__title">{title}</h1>
                <p className="modal-content__description">{desc}</p>
                {isButton && (
                    <a href="<#SelfURL>/akcii" className="main-button" type="submit">
                        {'<#trn_Войти>'}
                    </a>
                )}
            </div>
        </div>
    );
}
