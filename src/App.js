import React, {Component} from 'react'

class App extends Component{
    render(){
        var child1 = React.createElement('li', null, '23333')
        var child2 = React.createElement('li', null, '随便发点什么')
        var root = React.createElement('ul', {className: 'my-list'}, child1, child2)
        return (
            <div>
                <p>shenme hello world</p>
                <ul className='my-list'>
                    <li>什么值得买</li>
                    <li>什么值得买2</li>
                </ul>
                {root}
            </div>
        )
        
    }
}

export default App