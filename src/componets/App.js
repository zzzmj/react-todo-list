import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            filter: 'all'
        }
        this.nextTodoId = 1
    }

    render() {
        const todos = this.getVisibleTodos()
        return (
            <div>
                <AddTodo addTodo={this.addTodo} />
                <TodoList todos={todos} toggleTodo={this.toggleTodo} />
                <Footer
                    filter={this.state.filter}
                    setVisibleTodos={this.setVisibleTodos}
                />
            </div>
        )
    }

    getVisibleTodos = () => {
        const filter = this.state.filter
        return this.state.todos.filter(todo => {
            const completed = todo.completed
            if (filter === 'active') {
                return !completed
            } else if (filter === 'completed') {
                return completed
            } else {
                return true
            }
        })
    }

    setVisibleTodos = filter => {
        this.setState({ filter })
    }

    addTodo = text => {
        const todos = this.state.todos
        const todo = {
            id: this.nextTodoId++,
            text,
            completed: false
        }
        this.setState({
            todos: [todo, ...todos]
        })
    }

    toggleTodo = id => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState({
            todos: newTodos
        })
    }
}

export default App
