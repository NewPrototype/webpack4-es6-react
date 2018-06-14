import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';


if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('App'));
