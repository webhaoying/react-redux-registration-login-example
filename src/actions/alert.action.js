import { alertConstants } from '../constants/authentication.js'

export const alertActions = {
    success,
    error,
    clear,
}

function success(message) {
    return {
        type: alertConstants.SUCCESS,
        message
    }
}

function error(message) {
    return {
        type: alertConstants.ERROR,
        message
    }
}
function clear(message) {
    return {
        type: alertConstants.CLEAR,
        message
    }
}