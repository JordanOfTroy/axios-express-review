import React, { Component } from 'react';
import ToDo from './ToDo';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      toDo: ['eat Dinner']
    }
    this.handleInput = this.handleInput.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
  }
  // ==== on page load get todos from server ====

  handleInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }
  addTodo() {
    // add an item to your todo list
  }
  editTodo(str, index) {
    console.log('look here', this.state.toDo)
    let toDoCopy = this.state.toDo.slice()
    console.log(str,index)
    toDoCopy[index] = str
    this.setState({
      toDo:toDoCopy
    })
  }

  render() {
    console.log(this.state)
    let displayToDos = this.state.toDo.map((e,i) => {
      return (
        <ToDo toDo={e} index={i}  editTodo={this.editTodo}/>
      )
    })
    return (
      <div className="App">
        <input type="text" value={this.state.userInput} onChange={this.handleInput} />
        <button onClick={this.addTodo}>add Item</button>
        {displayToDos}
      </div>
    );
  }
}

export default App;
