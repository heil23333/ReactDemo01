import React, { Component } from 'react'

class XiaojiejieItem extends Component {
    render() { 
        return ( 
            <li onClick={this.delet.bind(this)}>{this.props.content}</li>
         );
    }

    delet(){
        this.props.deletItem(this.props.index)
        
    }
}
 
export default XiaojiejieItem;