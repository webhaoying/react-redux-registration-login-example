import { userConstants } from '../constants/authentication.js'
import { hashHistory } from 'react-router'
import { alertActions } from './alert.action.js'
import { userService } from '../fetch/user.service.js'


export const userActions = {
    login,
    // logout,
    // register,
    // getAll,
    // delete: _delete
}
function login(username, password) {
    function request(user) {
        return {
            type:userConstants.LOGIN_REQUEST,
            user
        }
    }
    function success(user) {
        return {
            type:userConstants.LOGIN_SUCCESS,
            user
        }
    }
    function failure(error) {
        return {
            type:userConstants.LOGIN_FAILURE,
            error
        }
    }

    return dispatch => {
        dispatch(
            request({username}
            )
        );
        userService.loginPost(username , password)
        .then(response => {
            // console.log(response)
            return response.json();
        })
        .then(json => {
            console.log(json);
            dispatch(success(json.username));
            // js来控制路由跳转  也可以利用Link标签来实现
            // hashHistory.push('/home');
        }).catch(
            error =>{
                // console.log(error);
                dispatch(failure(error));
                dispatch(alertActions.error(error))
            }
        )

    }
}