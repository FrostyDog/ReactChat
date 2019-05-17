import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <h4 className="name">{this.props.name}</h4>
        <p className="message">{this.props.message} </p>
      </div>
    );
  }
}

export default Message;
