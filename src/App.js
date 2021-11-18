import React, { Component } from "react";

import ToDoList from "./components/TodoList/TodoList";
import initialTodos from "./todos.json";
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
    todos: initialTodos, // array []
  };

  deleteTodoHandler = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleCompleted = (todoId) => {

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if(todo.id === todoId){
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       }
    //     }

    //     return todo;
    //   })
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo => 
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo)
    }))
  };

  render() {
    const { todos } = this.state;

    return (
      <>
        <ToDoList
          todos={todos}
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
