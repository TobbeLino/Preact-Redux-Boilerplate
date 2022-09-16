export const actionTypes = {
	initialize: null,
	setCounter: null,
};

// Mirror all actionType-keys to their values (to avoid having to enter the types twice manually above)
Object.keys(actionTypes).forEach(k => actionTypes[k] = k);
