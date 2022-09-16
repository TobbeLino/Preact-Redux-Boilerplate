import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {INITIAL_STATE} from '../constants/INITIAL_STATE';
import {reducer} from '../reducer/reducer';

const middlewares = [
	thunk,
];

export const getCustomStore = (customState) =>
	createStore(reducer, customState, applyMiddleware(...middlewares));

export const store = getCustomStore(INITIAL_STATE);
