// src/components/Modal.tsx
import React from 'react';
import '../modal.css';

interface ModalProps {
    show: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-body'>
                    Employee created!
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="buttonClose">Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
