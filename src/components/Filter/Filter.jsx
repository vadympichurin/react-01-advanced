import React from "react";
import { connect } from "react-redux";

import { changeFilter } from "../../redux/todos/todos-actions";

const Filter = ({ value, onChange }) => {
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
    return dispatch(changeFilter(event.currentTarget.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
