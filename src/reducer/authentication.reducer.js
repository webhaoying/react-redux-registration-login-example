import {userConstants} from '../constants/authentication.js'
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true , user } :{ loggedIn: false, user };
console.log(user)
export function authentication(state = initialState, action) {
    switch( action.type ){
        case userConstants.LOGIN_REQUEST:
            return {
                loggedIn:true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return{
                loggedIn: true,
                user:action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default :
            return state

    }
}