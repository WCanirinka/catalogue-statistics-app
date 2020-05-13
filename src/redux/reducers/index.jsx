/* eslint-disable import/no-unresolved */
import { combineReducers } from 'redux';
import catReducer from './cat';
import categoryReducer from './categories';
import spinnerReducer from './spinner';
import filterReducer from './filter';

export default combineReducers({
  catReducer,
  categoryReducer,
  spinnerReducer,
  filterReducer,
});
