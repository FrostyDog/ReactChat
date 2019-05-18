import React from "react";
import Input from "./input";
import Message from "./message";
import Disconnect from "./Disconnect";

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      stance: ""
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  ws = new WebSocket("ws://localhost:3030");

  componentDidMount() {
    this.ws.onmessage = event => {
      let newMessage = JSON.parse(event.data);
      this.addMessage(newMessage);
    };

    this.ws.onclose = () => {
      this.setState({
        stance: "disconnected"
      });
    };
  }

  addMessage = message => {
    this.setState({ messages: [message, ...this.state.messages] });
    console.log(this.state.messages);
  };

  SubmitMessage = (nameUser, messageText) => {
    const message = { name: nameUser, message: messageText };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };

  render() {
    return (
      <div>
        <Disconnect stance={this.state.stance} />
        <Input SendMessage={this.SubmitMessage} />
        {this.state.messages.map((message, index) => (
          <Message key={index} name={message.name} message={message.message} />
        ))}
      </div>
    );
  }
}

export default Chat;
