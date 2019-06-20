import React from 'react'
import TodoListContainer from '../container/TodoListContainer'
import AddTodoContainer from '../container/AddTodoContainer'
import FooterContainer from '../container/FooterContainer'

const App = () => {
    return (
        <div>
            <AddTodoContainer />
            <TodoListContainer />
            <FooterContainer />
        </div>
    )
}

export default App
