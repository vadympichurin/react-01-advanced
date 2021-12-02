import React, { Component } from "react";

import ToDoList from "../../components/TodoList/TodoList";
import TodoEditor from "../../components/TodoEditor/TodoEditor";
import Filter from "../../components/Filter/Filter";
import Modal from "../../components/Modal/Modal";
import IconButton from "../../components/IconButton/IconButton";

import { getTodos, deleteTodo, addTodo, updateTodo } from "../../utils/todoApi";

class TodoPage extends Component {
  state = {
    todos: [],
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    getTodos()
      .then((todos) => this.setState({ todos }))
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  deleteTodoHandler = (todoId) => {
    deleteTodo(todoId).then(() => {
      this.setState((prevState) => ({
        todos: prevState.todos.filter(({ id }) => id !== todoId),
      }));
    });
  };

  toggleCompleted = (todoId) => {
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;

    updateTodo(todoId, { completed: !completed }).then((updatedTodo) => {
      this.setState(({ todos }) => ({
        todos: todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        ),
      }));
    });
  };

  addTodo = (text) => {
    const todo = {
      text,
      completed: false,
    };

    addTodo(todo)
      .then((todoData) => {
        this.setState((prevState) => ({
          todos: [...prevState.todos, todoData],
        }));
        this.toggleModal();
      })
      .catch((error) => console.log(error));
  };

  chnageFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    const totalTodos = todos.length;
    const filteredTodos = this.getFilteredTodos();

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
            <TodoEditor onSubmit={this.addTodo} />
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
        <br />

        <Filter value={filter} onChange={this.chnageFilter} />
        <br />
        <br />

        <ToDoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodoHandler}
          toggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default TodoPage;
