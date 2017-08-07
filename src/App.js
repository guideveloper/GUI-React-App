import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GUI App</h1>

        <Projects />
      </div>
    );
  }
}

export default App;
