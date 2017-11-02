import React from 'react'
import './loginComponentStyle.css'
export default class LoginComponent extends React.PureComponent{
    constructor(props){
        super(props);
    }
    inputChange(e){
        this.props.handleChange(e);
        return this.checkUsername(e.target.value);
    }
    loginFn(){
        this.props.handleLogin();
    }
    checkUsername(username){
        // 如果邮箱格式不正确
        let regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
       return regex.test(username)
    }
    render(){
        const { submitted ,loggingIn,username,password}=this.props
        console.log('渲染')
        console.log( (submitted && !this.checkUsername() && username))
        return(
            <div>
                <form action="" className="login_form">
                    <ul className="">
                        <li>
                            <label htmlFor="usernanme">用户名：</label>
                            <input type="text" name="username" maxLength={'40'}
                                   value={this.props.username}
                                   onChange={this.inputChange.bind(this)}
                                   onBlur={this.checkUsername.bind(this,username)}
                                   // onFocus={this.checkUsername.bind(this,username)}

                            />

                            {
                                submitted && !username &&
                                <div> 用户名不能为空</div>
                            }
                            {
                                submitted && !this.checkUsername() && username &&
                                <div> 邮箱格式不正确</div>
                            }

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