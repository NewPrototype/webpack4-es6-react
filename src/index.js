import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Routers from './router'
import Error from './util/error'  //错误日志
import Performance from './util/performance'  //错误日志
import './index.styl';
import 'babel-polyfill';
/*
 * Author: liujunxiong
 * -----
 * data: Monday, 15th October 2018 8:47:01 pm
 * -----
 * Describe: 入口文件
 * -----
 */

/**
 * 热更新
 */
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
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('App')
);
