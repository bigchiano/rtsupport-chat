import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends React.Component {
    render() {
        return (
            <li>
                <a 
                    href='#'
                    className='p-1 inline-block hover:text-gray-400 font-bold'
                    >
                    # 
                    {user.name}
                </a>
            </li>
        )
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User
