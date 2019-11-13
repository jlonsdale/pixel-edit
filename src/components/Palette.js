import React, { Component } from 'react';

class Palette extends React.Component{

  constructor(props) {
    super(props)
    let color1 = this.getRandomColor()

    this.state =
   {color1 : color1,
    color2 : this.getRandomColor(),
    color3 : this.getRandomColor(),
    color4 : this.getRandomColor(),
    color5 : this.getRandomColor(),
    currentKey: 49,
    currentColor: color1}

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.keyCode>48&&e.keyCode<54) {
      this.setState({currentKey: e.keyCode})
      this.getColorFromKey(e.keyCode)};
  }

  componentDidMount() {
   document.addEventListener('keydown', this.handleKeyPress);
  }

 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeyPress);
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

  getColorFromKey(key) {
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

  render()  {
    return(
      <div className = 'palette'>
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

        <button
          onClick= { () => this.rollForInspo() }>
          Roll for Inspiration
        </button>

        <br/>

        <h1 style={{color: this.state.currentColor}}>You are currently using this lovely color!</h1>

      </div>
    )
  };
};

export default Palette
