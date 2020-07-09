import React, { Component } from "react";
import PropTypes from "prop-types";
import MessageList from "./MessageList.jsx";
import MessageForm from "./MessageForm.jsx";

class MessageSection extends React.Component {
  render() {
    const { messages, sendMessage, activeChannel } = this.props;

    return (
      <div>
        <MessageList messages={messages} sendMessage={sendMessage} />
        <MessageForm
          messages={messages}
          sendMessage={sendMessage}
          activeChannel={activeChannel}
        />
      </div>
    );
  }
}

MessageSection.propTypes = {
  messages: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default MessageSection;
