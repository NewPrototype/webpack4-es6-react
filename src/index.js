import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routers from './router'

import Loadable from 'react-loadable';


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
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('App')
);
