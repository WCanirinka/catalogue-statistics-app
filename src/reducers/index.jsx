import { combineReducers } from 'redux';
import players from './cats';
import filter from './filter';

const rootReducer = combineReducers({
  players,
  filter,
});

export default rootReducer;
