import {useDispatch, useSelector} from 'react-redux';
import {incCounter, decCounter} from '../actions/actionCreators';

export const Main = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incCounterBy = (amount) => {
        dispatch(incCounter(amount));
    };

    return (
        <main>
            <h1>Hello from preact</h1>
            <h4 className="counterClass">Counter: {counter}</h4>
            <button onClick={() => {incCounterBy(1)}}>
                inc counter
            </button>
            <button onClick={() => {dispatch(decCounter(1))}}>
                dec counter
            </button>
        </main>
    )
}
