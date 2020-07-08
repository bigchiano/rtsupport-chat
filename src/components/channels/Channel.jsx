import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Channel extends React.Component {
    onClick(e) {
        e.preventDefault()
        const {setChannel, channel} = this.props
        setChannel(channel)
    }
    render() {
        const {channel, activeChannel} = this.props
        const active = (channel.id == activeChannel.id) ? 'text-gray-500' : ''
        const classes = `${active} p-1 inline-block hover:text-gray-400 font-bold`
        return (
            <li>
                <a 
                    href='#'
                    onClick={this.onClick.bind(this)}
                    className={classes}
                    >
                    # 
                    {channel.name}
                </a>
            </li>
        )
    }
}

Channel.propTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired,
}

export default Channel
