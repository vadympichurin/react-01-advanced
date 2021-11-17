import React, { Component } from "react";

import Form from "./components/Form/Form";
// import Counter from "./components/Counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
// import ColorPicker from "./components/ColorPicker/ColorPicker";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {

  onFormSubmit = data => {
    console.log('data : ', data);
  }

  render() {
    return (
      <>
        <Form onFormSubmit={this.onFormSubmit}/>
        <Form onFormSubmit={this.onFormSubmit}/>


        {/* <h1>Состояние компонента</h1> */}
        {/* <Counter initialValue={10} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdown/> */}
      </>
    );
  }
}

export default App;
