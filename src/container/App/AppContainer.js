/**
 * Created by roboterra_rd on 2017/10/31.
 */
import React from 'react'
import { createHashHistory } from 'history';
import { connect } from 'react-redux'
import { alertActions } from '../../actions/alert.action.js';
// 利用路由的变化  触发一些方法
export const history = createHashHistory();
class App extends  React.PureComponent {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location , action) =>{
            // 在路由更换的时候 清除所有的alert
            // alert('清除提示文字');
            dispatch (alertActions.clear())
        });

    }
    render (){
        const { alert} = this.props;
        return(
            <div className="text-center">
                {/* 根据不用的alert类型   启用不同的alert样式*/}
                <div className={ `text-center alert ${alert.type}`}   >
                    {alert.message &&
                    `${alert.message}`
                    }
                </div>
                {this.props.children}
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    }
}
export default connect(mapStateToProps)(App)