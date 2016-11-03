import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import essays from './essays';

let rootReducer = combineReducers({
  essays,
  routing
});

export default rootReducer;
