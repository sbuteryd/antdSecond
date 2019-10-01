import React from 'react';
import Child from './child'
import './index.less'
import { Button } from 'antd'

class Life extends React.Component{
    state= {
        name:"app",
        count:0
    }
    updateCount = ()=>{
        this.setState((preState)=>({
            count: preState.count+1
        }))
    }
    render() {
        return (
            <div className='container'>
                <Button type='primary'>Button</Button>
                <button onClick={this.updateCount}>click</button>
                <Child name={this.state.count}/>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Life;
