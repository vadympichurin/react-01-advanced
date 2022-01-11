import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    experience: "junior",
    license: false,
  };

  handleInputChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleLicenseChange = () => {
    this.setState((prevState) => ({
      license: !prevState.license,
    }));
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
      experience: "junior",
      license: false,
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

        <p>Ваш рівень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={this.state.experience === "junior"}
            onChange={this.handleInputChange}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={this.state.experience === "middle"}
            onChange={this.handleInputChange}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={this.state.experience === "senior"}
            onChange={this.handleInputChange}
          />
          Senior
        </label>

        <br />
        <br />
        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />
          Згоден з умовами користування
        </label>
        <button type="submit" disabled={!this.state.license}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
