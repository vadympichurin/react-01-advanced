import React from "react";
import { connect } from "react-redux";

import todosActions from "../../redux/todos/todos-actions";

const Filter = ({ value, onChange }) => {
  console.log("value : ", value);

  return (
    <label>
      Фільтр за ім'ям
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.todos.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => {
    console.log(event.currentTarget.value);
    return dispatch(todosActions.changeFilter(event.currentTarget.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
