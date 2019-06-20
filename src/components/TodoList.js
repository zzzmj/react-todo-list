import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    const { todos, toggleTodo } = props
    return (
        <div>
            <ul>
                {todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            toggleTodo={toggleTodo}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList
