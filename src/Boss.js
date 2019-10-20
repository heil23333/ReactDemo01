import React, { Component } from 'react'

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
                <div className={this.state.isShow ? 'show' : 'not-show'} > Boss级人物 - 钢铁侠 </div>
                <div>
                    <button onClick={this.total}> 切换 </button>
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