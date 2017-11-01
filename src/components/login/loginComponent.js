import React from 'react'
import './loginComponentStyle.css'
export default class LoginComponent extends React.PureComponent{
    constructor(props){
        super(props);
    }
    inputChange(e){
        this.props.handleChange(e);
    }
    loginFn(){
        this.props.handleLogin();
    }
    render(){
        return(
            <div>
                <form action="" className="login_form">
                    <ul className="">
                        <li>
                            <label htmlFor="usernanme">用户名：</label>
                            <input type="text" name="username" maxLength={'40'} value={this.props.username} onChange={this.inputChange.bind(this)}/>
                        </li>
                        <div>
                            {this.props.username}+{this.props.password}
                        </div>
                        <li>
                            <label htmlFor="password">密码：</label>
                            <input type="text" name="password" maxLength={'40'} value={this.props.password} onChange={this.inputChange.bind(this)}/>
                        </li>
                        <li className="btn_container">
                            <em onClick={this.loginFn.bind(this)}>登录</em>
                            <i>忘记密码？</i>
                            <span>创建账号</span>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}