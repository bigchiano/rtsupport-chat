import React, { Component } from "react";
import PropTypes from "prop-types";
import fecha from "fecha"

class Message extends React.Component {
  render() {
    const message = this.props.message;
    const showtime = fecha.format(message.time, 'HH:mm:ss MM/DD/YY');
    const username = message.user.name ? message.user.name : 'Anonymous'
    return (
      <li>
        <p className="px-2 m-1 inline-block rounded bg-gray-300 text-gray-900 max-w-md">
          <span className="pr-2">
            {username}
          </span>
          <i className="text-sm">{showtime}</i> <br />
          <span className="font-normal">{message.body}</span>
        </p>
      </li>
    );
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
