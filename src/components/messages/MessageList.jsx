import React, { Component } from "react";
import PropTypes from "prop-types";
import Message from "./Message.jsx";

class MessageList extends React.Component {
  render() {
    return (
      <div>
        <ul className="ml-2 mb-3 text-gray-100">
          {this.props.messages.map((message, index) => {
            return <Message message={message} key={index} {...this.props} />;
          })}
        </ul>
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageList;
