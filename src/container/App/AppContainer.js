/**
 * Created by roboterra_rd on 2017/10/31.
 */
import React from 'react'
class App extends  React.PureComponent {
    render (){
        return(
            <div className="text-center">
                {this.props.children}
            </div>
        )
    }
}
export default App