import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Show from './Show';
import ToggleDisplay from './ToggleDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <ToggleDisplay show>
                <img src={logo} className="App-logo" alt="logo" />
            </ToggleDisplay>
          <Show if={true}>
            <h2>Welcome to React</h2>
          </Show>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
