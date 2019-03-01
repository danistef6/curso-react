import React, { Component } from 'react';
import MyComponent from './components/myComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent greeting = {'Hola mundo desde una prop'} />
      </div>
    );
  }
}

export default App;
