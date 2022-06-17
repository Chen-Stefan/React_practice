import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// Greet后面的.js在import path里可以省略
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Messaege from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        {/* <Messaege /> */}
      {/* <Greet name="Bruce" hero='batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" hero='superman'>
        <button>Button</button>
      </Greet>
      <Greet name="Diana" hero='wonderwoman'/>
      <Welcome name="Bruce" hero='batman' />
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
