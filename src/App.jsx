import React, { Component } from "react";
import ChannelSection from "./components/channels/ChannelSection.jsx";
import UserSection from "./components/users/UserSection.jsx";
import MessageSection from "./components/messages/MessageSection.jsx";
import Socket from "../socket";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      activeUser: {},
      messages: [],
      connected: false,
    };
  }
  componentDidMount() {
    const ws = new WebSocket('ws://localhost:2200')
    const socket = (this.socket = new Socket(ws));
    socket.on("connect", this.onConnect.bind(this));
    socket.on("disconnect", this.onDisconnect.bind(this));
    socket.on("channel add", this.onAddChannel.bind(this));
    socket.on("user add", this.onAddUser.bind(this));
    socket.on("user edit", this.onEditUser.bind(this));
    socket.on("user remove", this.onRemoveUser.bind(this));
    socket.on("message add", this.onMessageAdd.bind(this));
  }
  onConnect() {
    this.setState({ connected: true });
    this.socket.emit("channel subscribe");
    this.socket.emit("user subscribe");
  }
  onDisconnect() {
    this.setState({ connected: false });
  }
  onAddChannel(channel) {
    const { channels } = this.state;
    channels.push(channel);
    this.setState({ channels });
  }
  addChannel(name) {
    // Send channels to server
    this.socket.emit('channel add', {name});
  }
  onMessageAdd(message) {
    const { messages } = this.state;
    messages.push(message);
    this.setState({ messages });
  }
  sendMessage(body) {
    const { activeChannel } = this.state;
    this.socket.emit("message add", { channelId: activeChannel.id, body });
  }
  setChannel(activeChannel) {
    this.setState({ activeChannel });
    this.socket.emit("message unsubscribe");
    this.setState({ messages: [] });
    this.socket.emit("message subscribe", { channelId: activeChannel.id });
  }
  addUser(name) {
    const users = this.state.users;
    users.push({ id: users.length, name });
    this.setState(users);
    // Send users to server
  }
  onAddUser(user) {
    const users = this.state.users;
    users.push(user);
    this.setState(users);
    // Send users to server
  }
  onEditUser(edituser) {
    const users = this.state.users;
    users = users.map((user) => (user.id === edituser.id ? edituser : user));
    this.setState(users);
    // Send users to server
  }
  onRemoveUser(removeuser) {
    const users = this.state.users;
    users = users.filter((user) => user.id !== removeuser.id);
    this.setState(users);
    // Send users to server
  }
  setUser(activeUser) {
    this.setState({ activeUser });
    // Get user's messages
  }
  setUserName(name) {
    this.socket.emit("user edit", { name });
    // Send users to server
  }
  render() {
    const showChannel = this.state.activeChannel.name
      ? this.state.activeChannel.name
      : "start channel";
    return (
      <div className="container box-border rounded-md shadow-xl">
        <div className="grid grid-cols-3 min-h-screen">
          <div className="col-span-1 p-5 bg-gray-900 pt-10">
            <h4 className="text-xl text-gray-100 leading-tight">Devs Chat</h4>{" "}
            <br />
            <h4 className="text-md text-gray-100 leading-tight">
              <i className="fa fa-comments-o pr-2" aria-hidden="true"></i>
              All threads
            </h4>
            <br />
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
              setUserName={this.setUserName.bind(this)}
            />
          </div>
          <div className="col-span-2 p-5 bg-gray-800 relative min-h-screen">
            <h4 className="text-xl text-gray-100 leading-tight">
              #{showChannel}
            </h4>{" "}
            <br />
            <MessageSection
              messages={this.state.messages}
              sendMessage={this.sendMessage.bind(this)}
              activeChannel={this.state.activeChannel}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
