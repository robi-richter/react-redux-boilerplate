import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducers as demo } from '../modules/demo';

export default combineReducers({
  router,
  demo,
});
