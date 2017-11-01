
import React from 'react'
import { connect } from 'react-redux';
import LoginComponent from '../../components/login/loginComponent'
import { userActions } from '../../actions/authentication.action.js'

class LoginContainer extends React.PureComponent{
    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
            submitted:'false',
            isLogin:'false'
        }
    }
    // 这里是封装了一个input输入内容改变的函数
    handleChange(e){
        const  {name ,value}=e.target;
        //相当于是
        /*
        * const name = e.target.name
        * const value = e.target.value
        * */
        this.setState(
            {
                [name]:value
            }
        )
    }
    handleLogin(){
        const {username,password} = this.state;
        console.log('点击登录');
        const { dispatch } = this.props;
        if(username && password ){
            //进行登录的ajax
            dispatch(userActions.login(username, password));
        }
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <div className="text-center">
                    <h2>登录页面</h2>
                </div>
                <LoginComponent
                    username={this.state.username}
                    password={this.state.password}
                    handleChange={this.handleChange.bind(this)}
                    handleLogin={this.handleLogin.bind(this)}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    // const { loggingIn } = state.authentication;
    // return {
    //     loggingIn
    // };
    //上述就相当于是如下书写
    return {
        loggingIn: state.authentication.loggedIn
    };
}
export default connect(mapStateToProps)(LoginContainer)