import React, { Component } from 'react'
import PropTypes from 'prop-types'


class XiaojiejieItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.content!==this.props.content
    }

    render() { 
        console.log('XiaojiejieItem   render');
        
        return ( 
            <li onClick={this.delet.bind(this)}>
                {this.props.name}为你做{this.props.content}
            </li>
         );
    }

    delet(){
        this.props.deletItem(this.props.index)
        
    }
}


XiaojiejieItem.propTypes = {//参数校验
    content:PropTypes.string,
    index:PropTypes.number,
    deletItem:PropTypes.func,
    name:PropTypes.string.isRequired
}

XiaojiejieItem.defaultProps= {
    name:'波多野结衣'
}
 
export default XiaojiejieItem;