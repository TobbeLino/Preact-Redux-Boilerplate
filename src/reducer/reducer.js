import { INITIAL_STATE } from '../constants/INITIAL_STATE';
import { stateModifiers } from '../actions/stateModifiers';

const noValidAction = (state, action) => {
	(action?.type?.indexOf?.('@@redux/') !== 0 ?? true) && console.log('no valid action', action, 'with state', state); // Don't log missing redux actions
	return state;
};

const modifiers = {
	...stateModifiers,
};

export const createReducer = (initialState) =>
	(state = initialState, action) =>
		modifiers?.[action.type]?.(state, action) ?? noValidAction(state, action);

export const reducer = createReducer(INITIAL_STATE);
