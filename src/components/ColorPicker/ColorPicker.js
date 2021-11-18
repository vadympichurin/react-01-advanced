import React, { Component } from "react";
import classNames from "classnames";

import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIndex: 2,
  };

  setActiveIndx = (index) => {
    this.setState({ activeOptionIndex: index });
  };

  makeOptionClassNames = (index) => {
    // const optionClass = ["ColorPicker__option"];

    // if (index === this.state.activeOptionIndex) {
    //   optionClass.push("ColorPicker__option--active");
    // }

    // return optionClass.join(" "); // "ColorPicker__option ColorPicker__option--active"

    return classNames("ColorPicker__option", {
      "ColorPicker__option--active": index === this.state.activeOptionIndex,
    });
  };

  render() {
    const { activeOptionIndex } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIndex];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбрал цвет: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={classNames("ColorPicker__option", {
                  "ColorPicker__option--active": index === this.state.activeOptionIndex,
                })}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIndx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
