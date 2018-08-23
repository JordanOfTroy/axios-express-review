import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editToggle: false,
            editInput: ''
        }
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleEditInput = this.handleEditInput.bind(this)
    }
    componentDidMount(){
        this.setState({
            editInput: this.props.toDo
        })
    }




    handleEditClick(){
        this.state.editToggle
        ?  this.handleSave()
        : this.setState({editToggle:true})
    }
    handleSave(){ 
        this.props.editTodo(this.state.editInput, this.props.index)
        this.setState({editToggle:false})
    }
    handleEditInput(e){

        this.setState({
            editInput:e.target.value
        })
    }

    render() {
        console.log('props',this.props, 'state',this.state)
        return (
            <div>
                {
                    this.state.editToggle
                        ? <input onChange={this.handleEditInput} value={this.state.editInput} />
                        : <div>{this.props.toDo}</div>
                }
                <button onClick={this.handleEditClick}>
                {
                    this.state.editToggle
                    ?
                    'Save'
                    :
                    'Edit'
                }
                </button>
            </div>
        )
    }
}