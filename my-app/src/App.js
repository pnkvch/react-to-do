import React, {Component} from 'react';
import MainContent from './MainContent'
import data from "./JSON.js"

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todosData: data,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
      this.setState(prevState => {
        const updatedTodos = prevState.todosData.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
        return {
          updatedTodos
        }
      })
  }

  render() {
    const todos = this.state.todosData.map(item => <MainContent key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div className="todo-list">
        {todos}
      </div>
    )
  }
}

export default App;