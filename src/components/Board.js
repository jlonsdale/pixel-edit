import React, { Component } from 'react';
import Square from './Square'


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
        <div>
          {rows}
        </div>
      </div>
    );
  };
};

export default Board
