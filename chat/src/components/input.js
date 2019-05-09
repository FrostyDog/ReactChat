import React, { Component } from "react";
import "./input.css";

class Input extends Component {
  render() {
    return (
      <div>
        <Welcome />
        {userNameInput}
        <Box />
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    return <h4>Weclome to our chat</h4>;
  }
}
const userName = "";

function Name(props) {
  return (
    <div>
      <input type="text" placeholder="UserName" value="user"></input>
    <p class="n"> This user name is {props.name} </p>
    </div>
  );
}

const userNameInput = <Name name=""/>

class Box extends Component {
  render() {
    return (
      <div cclass="input"lass="input">
<form class="form">
          <input type="text" />
          <button type="submit"> Send </button>
        </form>
      </div>
    );
  }
}

export default Input;
