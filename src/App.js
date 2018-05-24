// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Map } from 'immutable';

const map1 = Map({ a: 1, b: 2, c: 3 });


class App extends Component<null, null> {
  render() {
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
                {map1}
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(() => console.log("clicked"))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
