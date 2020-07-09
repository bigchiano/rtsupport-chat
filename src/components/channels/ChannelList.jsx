import React, { Component } from "react";
import PropTypes from "prop-types";
import Channel from "./Channel.jsx";

class ChannelList extends React.Component {
  render() {
    return (
      <div>
        <h4 className="text-md text-gray-100 leading-tight">Channels</h4>
        <ul className="ml-2 mb-3 text-gray-100">
          {this.props.channels.map((channel, index) => {
            return <Channel channel={channel} key={index} {...this.props} />;
          })}
        </ul>
      </div>
    );
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired
};

export default ChannelList;
