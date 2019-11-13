import React, { Component } from 'react';

class TestComponent extends Component {

  constructor(props) {
    super(props)
    this.state = 'I have state!'
  }

  render() {
    return(this.state)
  }

}

export default TestComponent
