import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    email: "",
    age: "",
  };

  handleInputChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  nameId = shortid.generate();
  emailId = shortid.generate();

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>Імя :</label>
        <input
          id={this.nameId}
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <br />
        <br />
        <label htmlFor={this.emailId}>
          Пошта :
          <input
          id={this.emailId}
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br />

        <label>
          Вік :
          <input
            name="age"
            type="text"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
