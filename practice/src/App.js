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
import NameList from './components/NameList';
import Person from './components/Person';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Stefan'
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('Did mount')
  }

  render() {
    console.log('LifecycleA render')
    return (
      <div className="App">
        <LifeCycleA />
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
