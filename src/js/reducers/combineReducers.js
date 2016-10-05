import {combineReducers} from 'redux';
import todosReducer from './todosReducer.js';

const allReducers = combineReducers({
	todos: todosReducer
});

export default allReducers;