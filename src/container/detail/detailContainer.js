import React from 'react'
class DetailContainer extends React.PureComponent{
    render(){
        return(
            <div>
                这里是detailContainer页面 <br/>
                这里是传过来的值：{this.props.params.id}

            </div>
        )
    }
}
export   default DetailContainer