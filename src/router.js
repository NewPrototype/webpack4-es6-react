import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { importPath } from './loadable';
/**
 * webpackChunkName 为需要按模块切割的名称
 */
const routers = [
  {
    path: '/',
    component: importPath({
      loader: () => import('pages/home/index.js'),
    }),
  },
  {
    path: '/home',
    component: importPath({
      loader: () =>
        import(/* webpackChunkName:"home" */ 'pages/home/index.js'),
    }),
  },
];

const Routers = () => (
  <main>
    <Switch>
      {routers.map(({ component, path, exact }, index) => {
        return (
          <Route exact={true} path={path} component={component} key={path} />
        );
      })}
    </Switch>
  </main>
);

export default Routers;
