import React, { Component } from 'react';

import './css/Nav.css';

import Data from './data/pages.json';

class Nav extends Component {
  getList() {
    let list = Data.pathname.map((path, index) => 
          <li key={index}><a href={path}>{Data.content[index].menu}</a></li>
        );

    return <ul>{list}</ul>;
  }

  render() {
    return (
      <nav className="nav">
          <this.getList />
      </nav>
    );
  }
}

export default Nav;