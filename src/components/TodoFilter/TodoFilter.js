import React from 'react';
import './TodoFilter.scss';
import { useDispatch, useSelector } from 'react-redux';
import { todosSelectors, changeFilter } from '../../redux/todos';

const TodoFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(todosSelectors.getFilter);

  const onChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Фильтр по содержимому</p>
      <input
        type="text"
        className="TodoFilter__input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TodoFilter;

// const mapStateToProps = state => ({
//   value: todosSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
