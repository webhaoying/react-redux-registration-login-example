import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router , Route } from 'react-router-dom'
import RouteMap from './router/routerContainer.js'
import { hashHistory } from 'react-router'
import { store } from './store/configureStore.js'
render(
    <Provider store={store}>
        <RouteMap history={ hashHistory }/>
    </Provider>
   ,
    document.getElementById('app')
);