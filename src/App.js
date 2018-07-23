import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: document.location.pathname.slice(1),
      timer: 5
    };
    if(this.state.page === "coffeescript") {
      setTimeout(this.countdown.bind(this), 1000);
    }
  }
  countdown() {
    this.setState({
      timer: this.state.timer - 1
    });
    if(this.state.timer > 0) {
      setTimeout(this.countdown.bind(this), 1000);
    }
    else {
      window.location.href = "/javascript";
    }
  }
  render() {
    return (
      <div className="App">
        <p><a href="/javascript">JavaScript</a></p>
        <p><a href="/haskell">Haskell</a></p>
        <p><a href="/coffeescript">CoffeeScript</a></p>
        <hr />
        {this.state.page === "javascript" && <p>A high level, dynamic, untyped, and interpreted programming language</p>}
        {this.state.page === "haskell" && <p>A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing</p>}
        {this.state.page === "coffeescript" && <p>CoffeeScript is a programming language that transcompiles to JavaScript, so we'll be redirecting back to JavaScript in {this.state.timer}</p>}
      </div>
    );
  }
}

export default App;
