import React, { Component } from 'react'
import './ToDo.css'

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editToggle: false,
            editInput: ''
        }
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleEditInput = this.handleEditInput.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.setState({
            editInput: this.props.toDo
        })
    }
    handleEditClick() {
        this.state.editToggle
            ? this.handleSave()
            : this.setState({ editToggle: true })
    }
    handleSave() {
        this.props.editTodo(this.state.editInput, this.props.index)
        this.setState({ editToggle: false })
    }
    handleDelete() {
        this.props.deleteTodo(this.props.index)
    }
    handleEditInput(e) {
        this.setState({ editInput: e.target.value })
    }

    render() {
        console.log('props', this.props, 'state', this.state)
        return (
            <div className='todoItem'>
                {
                    this.state.editToggle
                        ? <input onChange={this.handleEditInput} value={this.state.editInput} />
                        : <div>- {this.props.toDo}</div>
                }
                <section className="button_section">
                    <button onClick={this.handleEditClick}>
                        {
                            this.state.editToggle
                                ?
                                'Save'
                                :
                                'Edit'
                        }
                    </button>
                    <button onClick={this.handleDelete}>delete</button>
                </section>
            </div>
        )
    }
}