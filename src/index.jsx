import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router , Route } from 'react-router-dom'
import RouteMap from './container/router/routerContainer.js'
import { hashHistory } from 'react-router'

render(

    <RouteMap history={ hashHistory }/>
   ,
    document.getElementById('app')
);