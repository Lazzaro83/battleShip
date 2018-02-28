import React, { Component } from 'react';
import MyShips from './components/myShips.jsx';
import MyEnemyShips from './components/myEnemyShips.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">BattleShip</h1>
        </header>
        <div className="App-intro">
          <MyShips />
					<MyEnemyShips />
        </div>
      </div>
    );
  }
}

export default App;
