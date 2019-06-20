import React  from 'react'

const Footer = (props) => {
    const {filter, setVisibleTodos} = props
    return (
        <div>
            <span>Show:</span>
            <button onClick={() => setVisibleTodos('all')} disabled={filter === "all"}>All</button>
            <button onClick={() => setVisibleTodos('active')} disabled={filter === "active"}>Active</button>
            <button onClick={() => setVisibleTodos('completed')} disabled={filter === "completed"}>completed</button>
        </div>
    )
}

export default Footer
