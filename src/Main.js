import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './css/Main.css';

import Page from './Page';
import Catalog from './Catalog';

class Main extends Component {
  render() {
    let pathname = window.location.pathname;
    return (
      <main className="main">
        <Router>
          <Route path={pathname} component={pathname.indexOf('/catalog/') == -1 ? Page : Catalog} />
        </Router>
      </main>
    );
  }
}

export default Main;