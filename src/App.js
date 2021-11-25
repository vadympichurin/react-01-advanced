import React, { Component } from "react";
import shortid from "shortid";

import ToDoList from "./components/TodoList/TodoList";
import initialTodos from "./todos.json";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import Filter from "./components/Filter/Filter";
import Modal from "./components/Modal/Modal";
import Clock from "./components/Clock/Clock";
import Tabs from "./components/Tabs/Tabs";
import tabItems from "./tabs.json";

import Fox from "./static/images/fox.webp";

// <Fox  />

// import Form from "./components/Form/Form";
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
  state = {
    todos: [],
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    // console.log("App componentDidMount");
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("App componentDidUpdate");

    if (this.state.todos !== prevState.todos) {
      // console.log("Оновилося поле todos");

      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  deleteTodoHandler = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
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

    // const completedTodos = todos.filter(todo => todo.completed);
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    const totalTodos = todos.length;
    const filteredTodos = this.getFilteredTodos();

    // console.log("App render");

    return (
      <>

      <Tabs items={tabItems} />

      {showModal && <Clock />}
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>

        {
        // showModal && (
        //   <Modal onClose={this.toggleModal}>
        //     <p>
        //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        //       accusantium amet enim sapiente reprehenderit, rem unde debitis
        //       odio perspiciatis. Nisi veritatis nemo error quam rem!
        //     </p>
        //     <img src={Fox} alt="picture"/>
        //     {/* <Fox /> */}
        //     <button type="button" onClick={this.toggleModal}>
        //       Close modal
        //     </button>
        //   </Modal>
        // )
        } 

        <div>
          <p>Загальна кількість: {totalTodos} </p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

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

        {/* <Form onFormSubmit={this.onFormSubmit}/> */}
        {/* <h1>Состояние компонента</h1> */}
        {/* <Counter initialValue={10} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdown/> */}
      </>
    );
  }
}

export default App;
