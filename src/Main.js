import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import ReactApp from './ReactApp';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/ReactApp' component={ReactApp}></Route>
    </Switch>
  );
}

export default Main;