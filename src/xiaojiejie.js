import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './Xiaojiejieitem'
import axios from 'axios'
import Boss from './Boss'

class Xiaojiejie extends Component {

    componentDidMount(){
        axios.get('https://easy-mock.com/mock/5dac055ce8df8e174237d8fb/ReactDemo01/xiaojiejie')
            .then(
                (res)=>{
                    console.log('axios 获取数据成功:' + JSON.stringify(res))
                    this.setState({
                        list:res.data.data
                    })
                }
            )
            .catch(
                (error)=>{
                    console.log('axios 异常：' + error);
                    
                }
            )
    }

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
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
                <Boss/>
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

