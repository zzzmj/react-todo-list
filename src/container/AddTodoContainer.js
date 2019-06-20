import { connect } from 'react-redux'
import * as actions from '../actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(actions.addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)
