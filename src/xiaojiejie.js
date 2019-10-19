import React, { Component, Fragment } from 'react'
import './style.css'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['泰式按摩', '精油推背']
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="add">增加服务:</label>
                    <input id="add" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index + item}
                                    onClick={this.deletItem.bind(this, index)}
                                    dangerouslySetInnerHTML={{ __html: item }}
                                >
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    deletItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie