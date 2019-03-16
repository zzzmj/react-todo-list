import React, { Component } from 'react'

export default class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textValue: ''
        }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.textValue}/>
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }

    handleChange = e => {
        this.setState({
            textValue: e.target.value
        })
    }

    handleClick = () => {
        this.props.addTodo(this.state.textValue)
    }
}
