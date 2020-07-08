import React, { Component } from 'react'
import ChannelSection from './components/channels/ChannelSection.jsx'
import UserSection from './components/users/UserSection.jsx'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channels: [],
            activeChannel: {},
            users: [],
            activeUser: {}
        }
    }
    addChannel(name) {
        let channels = this.state.channels
        channels.push({ id: channels.length, name })
        this.setState(channels)
        // Send channels to server
    }
    setChannel(activeChannel) {
        this.setState({ activeChannel })
        // Get channel's messages
    }
    addUser(name) {
        let users = this.state.users
        users.push({ id: users.length, name })
        this.setState(users)
        // Send users to server
    }
    setUser(activeUser) {
        this.setState({ activeUser })
        // Get user's messages
    }
    render() {
        const showChannel = (this.state.activeChannel.name) ? this.state.activeChannel.name : 'start channel' 
        return (
            <div className="container box-border rounded-md shadow-xl">
                <div className="grid grid-cols-3 min-h-screen">
                    <div className="col-span-1 p-5 bg-gray-900 pt-10">
                        <h4 className="text-xl text-gray-100 leading-tight">Devs Chat</h4> <br />
                        <h4 className="text-md text-gray-100 leading-tight">
                            <i className="fa fa-comments-o pr-2" aria-hidden="true"></i>
                            All threads
                        </h4><br />
                        <ChannelSection 
                            {...this.state} 
                            addChannel={this.addChannel.bind(this)}
                            setChannel={this.setChannel.bind(this)}
                        />
                        <br />
                        <UserSection 
                            {...this.state} 
                            addUser={this.addUser.bind(this)}
                            setUser={this.setUser.bind(this)}
                        />
                    </div>
                    <div className="col-span-2 p-5 bg-gray-800">
                        <h4 className="text-xl text-gray-100 leading-tight">#{showChannel}</h4> <br />
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default App
