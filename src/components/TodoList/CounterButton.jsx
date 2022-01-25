import React from "react";
import { connect } from "react-redux";

import { increment } from "../../redux/todos/counter";

const CounterButton = ({ click, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Кликнули {click} раз
    </button>
  );
};

const mapStateToProps = (state) => ({
  click: state.counter.counter,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);
