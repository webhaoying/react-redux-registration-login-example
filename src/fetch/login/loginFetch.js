/**
 * Created by roboterra_rd on 2017/10/12.
 */
import { post } from '../post.js'
export function loginFetch(username,password) {
    return post('http://localhost:9000/api/login', {
        username:username,
        password:password
    });
}