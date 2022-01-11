import React, { Component } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

// - Модальное окно (componentDidMount и componentWillUnmount)
//   - Проблема z-index, как решать без костылей (порталы)
//   - Слушатель на keydown для Escape
//   - Слушатель на клик по Backdrop

const modalRoot = document.querySelector("#root_modal");

class Modal extends Component {
  state = {};

  componentDidMount() {
    console.log("Modal componentDidMount");

    window.addEventListener("keydown", this.handleEscDown);
  }

  componentWillUnmount() {
    console.log("Modal componentWillUnmount");

    window.removeEventListener("keydown", this.handleEscDown);
  }

  handleEscDown = (e) => {
    console.log("Pressed ESC");
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdrop = (e) => {
    if(e.currentTarget === e.target){
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdrop} >
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
