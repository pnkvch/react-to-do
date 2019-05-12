import React, { Component } from "react";
import MainContent from "./MainContent";
import data from "./JSON.js";
import Clock from "./Clock.js";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todosData: data,
      isLoading: true,
      textInput: ""
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1000);
  }
  handleChange = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todosData.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        updatedTodos
      };
    });
  };
  handleTextChange = e => {
    this.setState({
      textInput: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      const updated = {
        id: prevState.todosData.length + 1,
        text: prevState.textInput,
        completed: false
      };
      prevState.textInput = "";
      const newData = prevState.todosData.push(updated);
      return newData;
    });
    document.querySelector(".todo-list").style.height =
      this.state.todosData.length * 60 + "px";
  };
  render() {
    const todos = this.state.todosData.map(item => (
      <MainContent key={item.id} item={item} handleChange={this.handleChange} />
    ));

    if (this.state.isLoading === false) {
      return (
        <div className="main">
          <form onSubmit={this.handleSubmit}>
            <p>Add item:</p>
            <input
              type="text"
              value={this.state.textInput}
              onChange={this.handleTextChange}
              className="input-field"
            />
            <button type="submit">Submit</button>
            <Clock />
          </form>
          <div className="todo-list">{todos}</div>
        </div>
      );
    } else {
      return <h1>Loading.. </h1>;
    }
  }
}

export default App;
