import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.total = this.total.bind(this)
    }
    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames='boss-text'
                    unmountOnExit
                >
                    <div > Boss级人物 - 钢铁侠 </div>
                </CSSTransition>
                <div>
                    <button onClick={this.total}> {this.state.isShow? '隐藏':'显示'} </button>
                </div>
            </div>
        )
    }
    total() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}

export default Boss;