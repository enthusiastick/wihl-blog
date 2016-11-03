import React from 'react';
import { IndexRoute, Route } from 'react-router';
import EssayContainer from './containers/EssayContainer';

let routes = (
  <Route>
    <Route path="/:slug" component={EssayContainer} />
  </Route>
);

export default routes;
