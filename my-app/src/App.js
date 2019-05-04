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
  render() {
    const todos = this.state.todosData.map(item => (
      <MainContent key={item.id} item={item} handleChange={this.handleChange} />
    ));

    if (this.state.isLoading === false) {
      return (
        <div className="main">
          <form>
            <input
              type="text"
              value={this.state.textInput}
              onChange={this.handleTextChange}
            />
          </form>
          <h1>{this.state.textInput}</h1>
          <div className="todo-list">{todos}</div>
          <div>
            <Clock />
          </div>
        </div>
      );
    } else {
      return <h1>Loading.. </h1>;
    }
  }
}

export default App;
