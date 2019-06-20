import { connect } from 'react-redux'
import * as actions from '../actions'
import Footer from '../components/Footer'

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibleTodos: (filter) => dispatch(actions.setFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
