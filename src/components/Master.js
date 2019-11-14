import React, { Component } from 'react';
import Palette from './Palette'
import Board from './Board'

class Master extends React.Component{

  constructor(props) {
    super(props)

    let color1 = this.getRandomColor()

    this.state =
   {color1 : color1,
    color2 : this.getRandomColor(),
    color3 : this.getRandomColor(),
    color4 : this.getRandomColor(),
    color5 : this.getRandomColor(),
    currentColor: color1}

  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  rollForInspo() {
    this.setState(
     {color1 : this.getRandomColor(),
      color2 : this.getRandomColor(),
      color3 : this.getRandomColor(),
      color4 : this.getRandomColor(),
      color5 : this.getRandomColor(),
    })
  };

  setColorFromKey(key) {
    console.log(this)
    switch(key) {
      case 49:
        let color1 = this.state.color1
        this.setState({currentColor: color1})
        break;
      case 50:
        let color2 = this.state.color2
        this.setState({currentColor: color2})
        break;
      case 51:
        let color3 = this.state.color3
        this.setState({currentColor: color3})
        break;
      case 52:
        let color4 = this.state.color4
        this.setState({currentColor: color4})
        break;
      case 53:
        let color5 = this.state.color5
        this.setState({currentColor: color5})
        break;
      default:
    }
  }

  render() {
    return(
      <div>

        <Palette
        rollForInspo = {() => this.rollForInspo()}
        colors = {this.state}
        setColorFromKey = {(key) => this.setColorFromKey(key)}
         />

        <Board currentColor = {this.state.currentColor} />

      </div>
    );
  };




};

export default Master
