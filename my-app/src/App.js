import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavbarFeatures } from './Nav.js';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'

import AddTodo from './components/AddTodo.js'
import TodoList from './components/TodoList.js'



class App extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props
    return (
      <div className="App">
        <NavbarFeatures />

        <header className="App-header"></header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro"> </p>

        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList todos={visibleTodos} />

      </div>
    );
  }
}

function select(state) {
  return {
     visibleTodos: state.todos
  }
}


export default connect(select)(App);
