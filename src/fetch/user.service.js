import { post } from './post.js'
import { get } from './get.js'
export const userService = {
    loginPost
}
export function loginPost(username,password) {
    return get('/api/login');
}