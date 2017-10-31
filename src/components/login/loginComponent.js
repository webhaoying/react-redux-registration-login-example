import React from 'react'
import './loginComponentStyle.css'
export default class LoginComponent extends React.PureComponent{
    render(){
        return(
            <div>
                <form action="">
                    <ul className="">
                        <li>
                            <label htmlFor="usernanme">用户名：</label>
                            <input type="text" name="username" maxLength={'40'}/>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}