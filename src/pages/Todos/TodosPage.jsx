import React, { Component } from "react";
import { connect } from "react-redux";

import ToDoList from "../../components/TodoList/TodoList";
import TodoEditor from "../../components/TodoEditor/TodoEditor";
import Filter from "../../components/Filter/Filter";
import Modal from "../../components/Modal/Modal";
import IconButton from "../../components/IconButton/IconButton";

import { getAllTodos } from '../../redux/todos/todos-operations';
import todosSelectors from '../../redux/todos/todos-selectors';
import CounterButton from '../../components/TodoList/CounterButton';

class TodoPage extends Component {
  state = {
    todos: [],
    filter: "",
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  componentDidMount(){
    this.props.fetchTodos();
  }

  render() {
    const { todos, showModal } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    const totalTodos = todos.length;

    return (
      <>
        <IconButton
          type="button"
          onClick={this.toggleModal}
          aria-label="Добавить todo"
        >
          Open modal
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor />
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}

        <div>
          <p>Загальна кількість: {totalTodos} </p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>

        <br />
        <br />

        <CounterButton />

        <Filter />

        <br />
        <br />

        {this.props.isLoadingTodos && <h1>Loading...</h1>  }

        <ToDoList />
      </>
    );
  }
};

const mapStateToProps = state => ({
  isLoadingTodos: todosSelectors.getTodosLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(getAllTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
