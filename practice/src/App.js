import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// Greet后面的.js在import path里可以省略
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Messaege from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting />
        {/* <ParentComponent /> */}
        
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Messaege /> */}
        {/* <Greet name="Bruce" hero='batman' /> */}
      {/* /* <Greet name="Clark" hero='superman'>
        <button>Button</button>
      </Greet>
      <Greet name="Diana" hero='wonderwoman'/> */}
      {/* <Welcome name="Bruce" hero='batman' />
      <Welcome name="Clark" hero='superman' />
      <Welcome name="Diana" hero='wonderwoman' /> */}
    </div>
    );
  }
}

// 这是一个Stateless funtional Component, 如果写成Stateful Class Component 是像下面这样
// class App extends Component {
//   render(){
//     return ()
//   }
// }

export default App;
