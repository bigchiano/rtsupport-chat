import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserList from './UserList.jsx'
import UserForm from './UserForm.jsx'

class UserSection extends React.Component {
    render() {
        const {users, setUser, addUser, activeUser} = this.props
        return (
            <div>
                <UserList users={users} setUser={setUser} activeUser={activeUser} />
                <UserForm addUser={addUser} />
            </div>
        )
    }
}

UserSection.propTypes = {
    users: PropTypes.array.isRequired,
    setUser: PropTypes.func.isRequired,
}

export default UserSection
