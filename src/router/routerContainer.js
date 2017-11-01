/**
 * Created by roboterra_rd on 2017/10/31.
 */
import React from 'react'
import { Router, Route, IndexRoute  } from 'react-router'
import App from '../container/App/AppContainer.js'
import NotFoundContainer from '../container/404/404Container.js'
import LoginContainer from '../container/login/loginContainer.js'
import RegisterContainer from '../container/register/registerContainer.js'
import HomeContainer from '../container/home/HomeContainer.js'
import DetailContainer from '../container/detail/detailContainer.js'
class RouteMap extends React.PureComponent {
    render(){
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={LoginContainer}/>
                    <Route path='register' component={RegisterContainer}/>
                    <Route path='/login' component={LoginContainer}/>
                    <Route path='/home' component={HomeContainer}/>
                    <Route path='/detail(/:id)' component={DetailContainer}/>
                    <Route path='*' component={NotFoundContainer}/>
                </Route>
            </Router>
        )
    }
}
export default RouteMap;