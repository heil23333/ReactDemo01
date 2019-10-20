import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './Xiaojiejieitem'

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
                    <input
                        id="add"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={
                            (input) => {
                                this.input = input
                            }
                        }
                    />
                    <button onClick={this.addList.bind(this)}>增加</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <XiaojiejieItem
                                    key={index + item}
                                    content={item}
                                    index={index}
                                    deletItem={this.deletItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        this.setState({
            inputValue: this.input.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, ()=>{//setState完成后回调
            console.log(this.ul.querySelectorAll('li').length)
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