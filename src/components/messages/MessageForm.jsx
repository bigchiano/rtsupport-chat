import React, { Component } from "react";
import PropTypes from "prop-types";

class MessageForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.message;
    const message = node.value;
    this.props.sendMessage(message);
    node.value = "";
  }
  render() {
    let input = null;
    if (this.props.activeChannel.id !== undefined) {
      input = (
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            ref="message"
            className="rounded min-w-full py-2 px-4 text-gray-100 focus:outline-none bg-gray-800 absolute bottom-0 left-0"
            placeholder="Type a message"
          />
        </form>
      );
    }
    return input;
  }
}

MessageForm.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default MessageForm;
