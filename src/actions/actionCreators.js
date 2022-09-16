import { actionTypes } from './actionTypes';

export const initialize = (initialState, stateUpdate) => ({ type: actionTypes.initialize, initialState, stateUpdate });
export const setCounter = (value) => ({ type: actionTypes.setCounter, value });

export const incCounter = (amount) => async (dispatch, getState) => {
    const { counter } = getState();
    dispatch(setCounter(counter + amount));
}
export const decCounter = (amount) => async (dispatch, getState) => {
    const { counter } = getState();
    dispatch(setCounter(counter - amount));
}
