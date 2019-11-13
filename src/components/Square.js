import React, { Component } from 'react';

class Square extends Component {

  constructor(props) {
    super(props)
    this.state = {bgColor: 'white'}
  }


  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <div>
      <button
      className="square"
      onClick={ () => this.setState({bgColor: this.getRandomColor()})}
      style={{backgroundColor:this.state.bgColor}}>
      </button>
      </div>
    );
  };
};

export default Square;
