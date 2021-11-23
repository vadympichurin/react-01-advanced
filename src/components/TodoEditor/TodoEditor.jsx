import React, { Component } from "react";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
      this.setState({message: e.currentTarget.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);
    this.setState({message: ''});
  }

  render() {
    const { message } = this.state;
    // const { onSubmit } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={this.handleChange}
        ></textarea>

        <button type="submit" >Створити todo</button>
      </form>
    );
  }
}

export default TodoEditor;
