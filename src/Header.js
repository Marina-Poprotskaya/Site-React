import React, { Component } from 'react';

import './css/Header.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
            <a href="/"><img src={PUBLIC_URL + '/logo.svg'} /></a>
        </div>
        <div className="info">
            Company information:<br />
            +375 26 654-89-78<br />
            name@gmail.com
        </div>
      </header>
    );
  }
}

export default Header;