import React, { Component } from "react";

class Modal extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
