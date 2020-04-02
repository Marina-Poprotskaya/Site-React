import React, { Component } from 'react';

import './css/App.css';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;