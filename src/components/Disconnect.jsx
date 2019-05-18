import React from "react";

function Disconnect(props) {
  if (props.stance === "disconnected") {
    return <h4> Second user has disconected</h4>;
  } else return null;
}

export default Disconnect;
