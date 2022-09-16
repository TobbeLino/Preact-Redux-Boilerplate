import {useEffect} from 'preact/compat';

export const useKeyPress = (callback = () => '', keyCodes) => {
	useEffect(() => {
		const handler = ({code}) => {
			if (keyCodes.includes(code)) {
				callback(code);
			}
		};

		window.addEventListener('keydown', handler);
		return () => {
			window.removeEventListener('keydown', handler);
		};
	}, [callback, keyCodes]);
};
