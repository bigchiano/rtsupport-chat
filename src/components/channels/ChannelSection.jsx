import React, { Component } from "react";
import PropTypes from "prop-types";
import ChannelList from "./ChannelList.jsx";
import ChannelForm from "./ChannelForm.jsx";

class ChannelSection extends React.Component {
  render() {
    const { channels, setChannel, addChannel, activeChannel } = this.props;
    return (
      <div>
        <ChannelList
          channels={channels}
          setChannel={setChannel}
          activeChannel={activeChannel}
        />
        <ChannelForm addChannel={addChannel} />
      </div>
    );
  }
}

ChannelSection.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  addChannel: PropTypes.func.isRequired,
  activeChannel: PropTypes.object.isRequired,
};

export default ChannelSection;
