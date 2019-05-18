import React from "react";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      msgIn: "",
      nameIn: ""
    };
    this.Submit = this.Submit.bind(this);
    this.Call = this.Call.bind(this);
  }

  Call(arg) {
    console.log(arg);
  }

  Submit(e) {
    if (this.state.msgIn === "") {
      alert("Enter message");
    } else {
      e.preventDefault();
      // this.setState({
      //   msg: this.state.msgIn,
      //   msgIn: "",
      //   name: this.state.nameIn,
      // });
      this.props.SendMessage(this.state.nameIn, this.state.msgIn);
      this.setState({
        msgIn: ""
      });
    }
  }

  render() {
    return (
      <div>
        <p>Name</p>
        <input
          type="name"
          onChange={e => {
            this.setState({ nameIn: e.target.value });
          }}
        />

        <input
          type="text"
          value={this.state.msgIn}
          onChange={e => {
            this.setState({ msgIn: e.target.value });
          }}
        />
        <button type="submit" onClick={this.Submit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Input;
