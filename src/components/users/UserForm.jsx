import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends React.Component {
    onSubmit(e) {
        e.preventDefault()
        const node = this.refs.username
        const userName = node.value
        this.props.setUserName(userName)
        node.value = ''
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input 
                    type='text'
                    ref='username'
                    className="rounded py-2 px-4 text-gray-100 focus:outline-none bg-gray-800"
                    placeholder="Set your username"
                />
            </form>
        )
    }
}

UserForm.propTypes = {
    setUserName: PropTypes.func.isRequired,
}

export default UserForm
