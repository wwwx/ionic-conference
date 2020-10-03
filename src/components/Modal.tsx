import React from 'react'
import { createPortal } from 'react-dom'
import './Modal.scss'

type ModalProps = {
    visible: boolean;
    hide: () => void;
    title?: string;
    content: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ visible, hide, title, content }) => {
    const modal = (
        <React.Fragment>
            <div className="app-overlay"></div>
            <div className="app-modal">
                <div className="modal">
                    <span className="modal-close" onClick={hide}></span>
                    {title && <div className="modal-header">{title}</div>}
                    <div className="modal-body">{content}</div>
                </div>
            </div>
        </React.Fragment>
    )
    return visible ? createPortal(modal, document.body) : null
}

export default Modal