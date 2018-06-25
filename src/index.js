import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import 'babel-polyfill';

import './index.styl';

if (module.hot) {
  module.hot.accept();
}

import LeftNav from 'components/leftnav';
import Header from 'components/header';

import Footer from 'components/footer';

class App extends React.Component {
  componentWillMount() {}
  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
          <LeftNav data={this.props} />
          <div className="main-content">{this.props.children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

const PageHome = (location, cb) => {
  require.ensure(
    [],
    (require, path) => {
      cb(null, require('pages/home/index.js').default);
    },
    'home'
  );
};
const PageTest = (location, cb) => {
  require.ensure(
    [],
    (require, path) => {
      cb(null, require('pages/test/index.js').default);
    },
    'test'
  );
};
const NotFound = (location, cb) => {
  require.ensure(
    [],
    (require, path) => {
      cb(null, require('components/notfound/index.js').default);
    },
    'test'
  );
};

ReactDOM.render(<App />, document.getElementById('App'));
