import React, { Component } from 'react';

class Square extends Component {

  constructor(props) {
    super(props)
    this.state = {bgColor: 'white'}
  }

  render() {
    return (
      <div>
      <button
      className="square"
      onClick={ () => this.setState({bgColor: this.props.currentColor})}
      style={{backgroundColor:this.state.bgColor}}>
      </button>
      </div>
    );
  };
};

export default Square;
