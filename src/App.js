import React from 'react';
import './App.css';
import  Life from './pages/demo/Life'

class App extends React.Component{
  state= {
    name:"app",
    count:0
  }

  render() {
    return (
        <div>
          <Life/>
        </div>
    );
  }
}

export default App;
