import React, { Component } from 'react';
import ToDo from './ToDo';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      toDo: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }
  // ==== on page load get todos from server ====
  componentDidMount() {
    axios.get('/api/todolist').then((res) => this.setState({ toDo: res.data }))
  }

  handleInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }
  addTodo() {
    axios.post('/api/todolist', { toDoThing: this.state.userInput }).then((res) => this.setState({ toDo: res.data, userInput: '' }))
  }
  editTodo(str, index) {
    //                             index here will be the same as index:index
    axios.put('/api/todolist', { newMessage: str, index }).then((res)=>this.setState({toDo: res.data}))
  }
  deleteTodo(index){
    axios.delete(`/api/todolist/${index}`).then((res)=>this.setState({toDo: res.data}))
  }

  render() {
    console.log(this.state)
    let displayToDos = this.state.toDo.map((e, i) => {
      return (
        <ToDo toDo={e} index={i} editTodo={this.editTodo} deleteTodo={this.deleteTodo}/>
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
