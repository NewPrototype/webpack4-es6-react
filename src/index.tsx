import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Routers from './router';
import Error from './util/error'; //错误日志
import Performance from './util/performance'; //错误日志

import Loadable from 'react-loadable';

import 'babel-polyfill';

import './index.styl';

if (module.hot) {
  module.hot.accept();
}
import LeftNav from 'components/leftnav/index.ts';
import Header from 'components/header';
import Footer from 'components/footer';

class App extends React.Component {
  componentWillMount() { }
  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
          <LeftNav data={this.props} />
          <Routers />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('App')
);
