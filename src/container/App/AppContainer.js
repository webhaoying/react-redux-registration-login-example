/**
 * Created by roboterra_rd on 2017/10/31.
 */
import React from 'react'
class App extends  React.PureComponent {
    constructor(props) {
        super(props);


        // const { dispatch } = this.props;
        // history.listen((location, action) => {
        //     // clear alert on location change
        //     dispatch(alertActions.clear());
        // });
    }
    render (){
        return(
            <div className="text-center">
                {this.props.children}
            </div>
        )
    }
}
export default App