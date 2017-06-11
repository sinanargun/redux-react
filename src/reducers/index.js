import { combineReducers } from 'redux';
import Reducer from './reducer';

const rootReducer = combineReducers({
  boxCount : Reducer
});

export default rootReducer;
