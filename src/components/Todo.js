import React, { Component } from 'react'

class Todo extends Component {
    shouldComponentUpdate = (nextProps, nextState) => {
        return  (nextProps.text !== this.props.text) || (nextProps.completed !== this.props.completed)
    }
    
    render() {
        const { id, text, completed } = this.props
        return (
            <li
                onClick={() => this.handleClick(id)}
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
                {text}
            </li>
        )
    }

    handleClick = id => {
        this.props.toggleTodo(id)
    }
}

export default Todo