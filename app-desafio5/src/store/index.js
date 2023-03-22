import { combineReducers, createStore } from 'redux';
import { dateReducer, datesReducer } from '../reducers/';

combineReducers;
const RootReducer = combineReducers({
      date: dateReducer,
      dates: datesReducer,
});
export default createStore(RootReducer);
