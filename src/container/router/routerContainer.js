/**
 * Created by roboterra_rd on 2017/10/31.
 */
import React from 'react'
import { Router, Route, IndexRoute  } from 'react-router'
import App from '../App/AppContainer.js'
import NotFoundContainer from '../404/404Container.js'
import LoginContainer from '../login/loginContainer.js'
import RegisterContainer from '../register/registerContainer.js'
import DetailContainer from '../detail/detailContainer.js'
class RouteMap extends React.PureComponent {
    render(){
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={LoginContainer}/>
                    <Route path='/register' component={RegisterContainer}/>
                    <Route path='/login' component={LoginContainer}/>
                    <Route path='/detail(/:id)' component={DetailContainer}/>
                    <Route path='*' component={NotFoundContainer}/>
                </Route>
            </Router>
        )
    }
}
export default RouteMap;