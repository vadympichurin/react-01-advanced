import React, { Component } from "react";
import Controls from "./Controls";
import Value from "./Value";

import "./Counter.css";

// class Counter extends React.Component
class Counter extends Component {
  // OLD SCHOOL
  // constructor(){
  //   super();

  //   this.state = {
  //     value: 0,
  //     a: 1,
  //     b: 2,
  //   };
  // }

  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
    a: 1,
    b: 2,
  };

  // handleIncrement(){
  //   console.log("Click on Increment btn")
  //   console.log(this); // undefined
  // }

  handleIncrement = (event) => {
    // console.log(this); // Counter

    // const target = event.target;
    const { target } = event;

    // setTimeout(() => {
    //   console.log(target);
    // }, 1000)

    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  // this.state.value = 6; // STOP!!!!!!!!!!
  handleDecrement = () => {
    // перезаписываем Стейт на новый
    // this.setState({
    //   value: this.state.value + 1,
    // });

    // перезаписываем Стейт на основании предыдущего
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  //
  // currentState = {
  //   value: 0,
  //     a: 1,
  //     b: 2,
  // }

  // updateState = {
  //   value: 7,
  // }

  // newState = {...currentState, ...updateState} = {
  //   value: 7,
  //   a: 1,
  //   b: 2,
  // }

  render() {
    return (
      <div className="Counter">
        
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;

// ref.addEventListener('click', () => {});

// onSubmit

// onMouseEnter
