import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers.
 * There is a reducer for each piece of your state.
 * */

const allReducers = combineReducers({
    todos,
    routing: routerReducer
});

export default allReducers;