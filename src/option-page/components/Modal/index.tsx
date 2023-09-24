import React from 'react';

import { ModalProps } from './types';

import './modal.scss';

const Modal = ({ isVisible, children, onCloseModal }: ModalProps) => {
  return isVisible ? (
    <div className="modal-wrapper">
      <span
        className="modal-wrapper__overlay"
        onClick={() => onCloseModal()}
      ></span>

      <div className="modal-wrapper__modal">
        <button
          onClick={() => onCloseModal()}
          className="modal-wrapper__close-button"
        >
          +
        </button>

        <div className="modal-wrapper__content">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
