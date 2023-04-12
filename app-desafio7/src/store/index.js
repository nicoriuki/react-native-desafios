import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
      authReducer,
      dateReducer,
      datesReducer,
      patientsReducer,
      userReducer,
      photoReducer,
} from './reducers/';

combineReducers;
const RootReducer = combineReducers({
      date: dateReducer,
      dates: datesReducer,
      patients: patientsReducer,
      auth: authReducer,
      user: userReducer,
      photo: photoReducer,
});
export default createStore(RootReducer, applyMiddleware(thunk));
