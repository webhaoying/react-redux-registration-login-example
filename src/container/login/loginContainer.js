
import React from 'react'
import LoginComponent from '../../components/login/loginComponent'
class LoginContainer extends React.PureComponent{
    render(){
        return(
            <div>
                <div className="text-center">
                    <h2>登录页面</h2>
                </div>
                <LoginComponent/>

            </div>
        )
    }
}
export default LoginContainer