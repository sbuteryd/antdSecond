import React from 'react';
import Child from './child'

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
            <div>
                <button onClick={this.updateCount}>click</button>
                <Child name={this.state.count}/>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Life;
