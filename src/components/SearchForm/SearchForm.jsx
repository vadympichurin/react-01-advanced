import React from "react";

class SearchForm extends React.Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
      e.preventDefault();

      this.props.onSubmit(this.state.query);
      this.setState({
          query: '',
      });
  }

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={query} 
          onChange={this.handleChange} 
        />

        <button type="submit">Find</button>
      </form>
    );
  }
}

export default SearchForm;
