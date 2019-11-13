import React, { Component } from 'react';

class Palette extends React.Component{

  constructor(props) {
    super(props)
    this.state =
   {color1 : this.getRandomColor(),
    color2 : this.getRandomColor(),
    color3 : this.getRandomColor(),
    color4 : this.getRandomColor(),
    color5 : this.getRandomColor()}
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render()  {
    return(
      <div classname = 'palette'>
      <p> Artist's Palette </p>
        <button
          className="color"
          onClick={ () => this.setState({color1: this.getRandomColor()})}
          style={{backgroundColor:this.state.color1}}>
          1
        </button>

        <button
          className="color"
          onClick={ () => this.setState({color2: this.getRandomColor()})}
          style={{backgroundColor:this.state.color2}}>
          2
        </button>

        <button
          className="color"
          onClick={ () => this.setState({color3: this.getRandomColor()})}
          style={{backgroundColor:this.state.color3}}>
          3
        </button>

        <button
          className="color"
          onClick={ () => this.setState({color4: this.getRandomColor()})}
          style={{backgroundColor:this.state.color4}}>
          4
        </button>

        <button
          className="color"
          onClick={ () => this.setState({color5: this.getRandomColor()})}
          style={{backgroundColor:this.state.color5}}>
          5
        </button>

      </div>
    )
  }


}

export default Palette
