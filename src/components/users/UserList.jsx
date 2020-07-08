import React, { Component } from 'react'
import PropTypes from 'prop-types'
import User from './User.jsx'

class UserList extends React.Component {
    render() {
        return (
            <div>
                <h4 className="text-md text-gray-100 leading-tight">Users</h4>
                <ul className='ml-2 mb-3 text-gray-100'>
                    {this.props.users.map((user, index) => {
                        return <User 
                            user={user}
                            key={index}
                            {...this.props}
                        />
                    })}
                </ul>
            </div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList
