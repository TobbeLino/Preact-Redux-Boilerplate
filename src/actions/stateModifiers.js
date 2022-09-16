import { actionTypes } from './actionTypes';

export const stateModifiers = {

	[actionTypes.initialize]: (state, { initialState, stateUpdate }) => {
		return {
			...state,
			...initialState,
			...stateUpdate
		};
	},

	[actionTypes.setCounter]: (state, { value }) => ({ ...state, counter: value }),
}
