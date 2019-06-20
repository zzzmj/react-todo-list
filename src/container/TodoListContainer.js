import { connect } from 'react-redux'
import * as actions from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos
        case 'completed':
            return todos.filter(todo => todo.completed)
        case 'active':
            return todos.filter(todo => !todo.completed)
        default:
            return new Error('Unknown filter:' + filter)
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.filter),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (id) => dispatch(actions.toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
