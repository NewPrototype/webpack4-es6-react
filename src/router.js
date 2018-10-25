import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {importPath} from './loadable';

const routers = [
  {
    path: '/',
    component: importPath ({
      loader: () => import (/* webpackChunkName:"home" */ 'pages/home/index.js'),
    }),
  },
  {
    path: '/home',
    component: importPath ({
      loader: () => import (/* webpackChunkName:"home" */ 'pages/home/index.js'),
    }),
  },
]


const Routers = () => (
  <main>
    <Switch>
      {
        routers.map(({ component, path, exact }, index) => {
          return <Route exact={true} path={path} component={component} key={path} />
        })
      }
    </Switch>
  </main>
);

export default Routers;