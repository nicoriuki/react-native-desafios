import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { dateReducer, datesReducer, patientsReducer } from './reducers/';
import authReducer from './reducers/authReducer';

combineReducers;
const RootReducer = combineReducers({
      date: dateReducer,
      dates: datesReducer,
      patients: patientsReducer,
      auth: authReducer,
});
export default createStore(RootReducer, applyMiddleware(thunk));
