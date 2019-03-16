import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const {filter, setVisibleTodos} = this.props
        return (
            <div>
                <span>Show:</span>
                <button onClick={() => setVisibleTodos('all')} disabled={filter === "all"}>All</button>
                <button onClick={() => setVisibleTodos('active')} disabled={filter === "active"}>Active</button>
                <button onClick={() => setVisibleTodos('completed')} disabled={filter === "completed"}>completed</button>
            </div>
        )

    }
}
