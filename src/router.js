import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';

const PageHome = Loadable({
  loader: () => import("./pages/home/index.js"),
  loading: () => { return null }
});
const PageTest = Loadable({
  loader: () => import("./pages/test/index.js"),
  loading: (isLoading,error) => { return null }
});
const Notfound = Loadable({
  loader: () => import("./components/notfound/index.js"),
  loading: (isLoading,error) => { return null }
});


const Routers = () => (
  <main>
    <Switch>
      <Route exact path='/' component={PageHome} />
      <Route exact path='/home' component={PageHome} />
      <Route exact path='/test' component={PageTest} />
      <Route exact path='/content/test1' component={PageHome}/>
      <Route exact path='/notfound' component={Notfound}/>

     
    </Switch>
  </main>
);

export default Routers;