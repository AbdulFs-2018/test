import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavbarFeatures } from './Nav.js';
import ReactDOM from 'react-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this)
  };


  setNewNumber() {
    this.setState({ data: this.state.data + 1 })
  }

  render() {
    return (
      <div className="App">
        <NavbarFeatures />

        <header className="App-header"></header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">

          <button onClick={this.setNewNumber}>INCREMENT</button>
          <Content myNumber={this.state.data}></Content>
        </p>
      </div>
    );
  }
}
class Content extends React.Component {
  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default App;
