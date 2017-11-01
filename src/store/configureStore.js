import { createStore , applyMiddleware , compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import  rootReducer from '../reducer/rootReducer.js'
const loggerMiddleware = createLogger();
export const store =  createStore(
    rootReducer,
    // 应用中间层  并且打印出来log
    compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        // 控制是否显示redux-devtools
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);