import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import PhotoList from './components/PhotoList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <PhotoList />
      </div>
    );
  }
}

export default App;
