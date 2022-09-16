import { actionTypes } from './actionTypes';
import { stateModifiers } from './stateModifiers';

const modifiers = {
	...stateModifiers,
};

describe('actionTypes', () => {
	test.each(Object.keys(actionTypes))('actionType "%s" should have a modifier', (action) => {
		expect(typeof modifiers[action]).toEqual('function');
	})
});

describe('actionType modifiers', () => {
	const seen = [];
	test.each(Object.keys(stateModifiers))('modifier "%s" should only have one implementation', (modifier) => {
		expect(seen).not.toContain(modifier);
		seen.push(modifier);
	});
});
