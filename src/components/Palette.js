import React, { Component } from 'react';

class Palette extends React.Component{

  constructor(props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.keyCode>48&&e.keyCode<54) {
      this.props.setColorFromKey(e.keyCode)};
  }

  componentDidMount() {
   document.addEventListener('keydown', this.handleKeyPress);
  }

 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeyPress);
  }

  render()  {
    return(
      <div className = 'palette'>
        <button
          className="color"
          style={{backgroundColor:this.props.colors.color1}}>
          1
        </button>

        <button
          className="color"
          style={{backgroundColor:this.props.colors.color2}}>
          2
        </button>

        <button
          className="color"
          style={{backgroundColor:this.props.colors.color3}}>
          3
        </button>

        <button
          className="color"
          style={{backgroundColor:this.props.colors.color4}}>
          4
        </button>

        <button
          className="color"
          style={{backgroundColor:this.props.colors.color5}}>
          5
        </button>

        <button
          onClick= { () => this.props.rollForInspo() }>
          Roll for Inspiration
        </button>

        <br/>

        <h1 style={{color: this.props.colors.currentColor}}>You are currently using this lovely color!</h1>

      </div>
    )
  };
};

export default Palette
