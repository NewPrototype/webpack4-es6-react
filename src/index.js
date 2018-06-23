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
  componentWillMount() { }
  render() {
    return (
      <div className='main'>
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
      cb(null, require('pages/home/home.js').default);
    },
    'home'
  );
};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route name="app" path="/" component={App}>
      <IndexRoute getComponent={PageHome} />
    </Route>
  </Router>,
  document.getElementById('App')
);
