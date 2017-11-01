import { combineReducers } from 'redux'
import { authentication } from './authentication.reducer.js'
import { alert } from './alert.reducer.js';

const rootReducer = combineReducers(
    {
        authentication,
        alert
    }
);
export default  rootReducer