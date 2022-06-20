import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }
  render() {
    return this.state.isLoggedIn && <div> Welcome Stefan</div>
    //  let message;
    //  if (this.state.isLoggedIn) {
    //   message = <div> Welcome Stefan</div>
    //  } else {
    //   message = <div> Welcome Guest</div>
    //  }
    // return <div> {message} </div>
  }
}

export default UserGreeting;
