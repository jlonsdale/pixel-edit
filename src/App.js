import React, { Component } from 'react';
import Palette from './components/Palette'
import Board from './components/Board'
import './StyleSheet.css'

class App extends React.Component {

  render() {
    return(
      <div>

        <h1> Pixel Art Creator </h1>

        <Palette />
        <Board />
        
      </div>
    );
  };
};






export default App;
