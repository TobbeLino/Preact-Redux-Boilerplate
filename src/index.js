import {App} from './App';
import {render} from 'preact';
import './main.css';
import {initialize} from './actions/actionCreators';
import {INITIAL_STATE} from './constants/INITIAL_STATE';

const start = async (el) => {
    el = el || document.getElementById('app');
    el.innerHTML = '';	// Simulate React behaviour (overwrite initial content of el)
    await render(<App />, el);
}

const init = async () => {
    initialize(INITIAL_STATE, {});
    await start();
}

init().then(() => {
    console.log('App started...')
});

