import React from 'react';
import { IndexRoute, Route } from 'react-router';
import EssayContainer from './containers/EssayContainer';
import EssaysContainer from './containers/EssaysContainer';

let routes = (
  <Route path="/">
    <IndexRoute component={EssaysContainer} />
    <Route path="/:slug" component={EssayContainer} />
  </Route>
);

export default routes;
