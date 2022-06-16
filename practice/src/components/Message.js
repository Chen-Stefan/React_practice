import React, { Component } from "react";

class Messaege extends Component {
  constructor() {
    super()
    this.state = {
      // initialize property
      message: 'Welcome visitor'
    }
  }
  
  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing'
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    )
  }
}

export default Messaege;
