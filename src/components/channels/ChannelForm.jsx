import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChannelForm extends React.Component {
    onSubmit(e) {
        e.preventDefault()
        const node = this.refs.channel
        const channelName = node.value
        this.props.addChannel(channelName)
        node.value = ''
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input 
                    type='text'
                    ref='channel'
                    className="rounded py-2 px-4 text-gray-100 focus:outline-none bg-gray-800"
                    placeholder="Add channel"
                />
            </form>
        )
    }
}

ChannelForm.propTypes = {
    addChannel: PropTypes.func.isRequired,
}

export default ChannelForm
