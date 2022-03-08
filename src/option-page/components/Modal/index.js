import React from 'react'

import './modal.scss'

const Modal = ({isVisible, children, onCloseModal}) => {
  return isVisible ? (
    <div className="modal-wrapper">
      <span className="modal-wrapper__overlay"></span>

      <div className="modal-wrapper__modal">
        <button onClick={onCloseModal} className="modal-wrapper__close-button">+</button>

        <div className="modal-wrapper__content">
          { children }
        </div>
      </div>
    </div>
  ) : null
}

export default Modal