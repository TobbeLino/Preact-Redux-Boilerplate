import React from 'preact/compat'
import {Provider} from 'react-redux';
import {store} from './actions/store';
import {Main} from './components/Main';

export const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Main />
            </Provider>
        </React.StrictMode>
    );
};
