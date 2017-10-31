import { createStore, applyMiddleware ,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    //  开启devtools的功能的话
    compose(applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    //插件调试使用方式
    // applyMiddleware(
    //     thunkMiddleware,
    //     loggerMiddleware
    // )
);