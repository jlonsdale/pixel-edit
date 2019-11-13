import React, { Component } from 'react';
import Square from './Square'
import Palette from './Palette'

class Board extends React.Component {
  renderSquare(x,y) {
    let coords = `${x},${y}`
    return <Square coords={coords} key={coords}/>;
  }

  render() {
    var rows = [];

    for (var j=1; j<21; j++) {
      var row = [];

      for (var i=1; i<21; i++) {
        row.push(this.renderSquare(i,j))
      }

      rows.push(
        <div className="board-row" key={j}>
        {row}
        </div>)
    }

    return (
      <div className = "board">
        <h1> Pixel Art Creator </h1>
        <div className = 'palette'>
          <Palette/>
         <br />
        </div>
        <div>
          {rows}
        </div>
      </div>
    );
  };
};

export default Board
