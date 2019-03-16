import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        const { id, text, completed } = this.props.todo
        return (
            <li
                onClick={() => {
                    this.handleClick(id)
                }}
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
