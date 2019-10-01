import React from 'react'

class Life extends React.Component{
    componentWillMount() {
        console.log('will mount')
    }
    componentDidMount() {
        console.log('did mount')
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('will props')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldUpdate')
        return true
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('will update')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('didupdate')
    }

    render() {
        return (
            <div>
                    <p>子组件</p>
            </div>
        );
    }
}

export default Life