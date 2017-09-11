import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}
const petter = {
  firstName: 'Petter',
  lastName: 'Foss'
}
const header = React.createElement(
  'h1',
  {className: 'Greeting'},
  'Hello World'
)

function tick() {
  const element = (
    <div>
      <h1>
        Klokke
      </h1>
      <h2>
        It is {new Date().toLocaleTimeString()}
      </h2>
    </div>
  );
  return element;
}

class App extends Component {
  constructor(){
    super()
    this.state = {klipper: "Nei"}

  }
  handleButtonClick(){
    if (this.state.klipper === "Ja") {
      this.setState({klipper: "Nei"})
    }else {
      this.setState({klipper: "Ja"})
    }
  }
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Sia til </h2><h1><b>Bernt</b></h1>
        </div>
        <p className="App-intro">
          <code>src/App.js</code>
        </p>
        <h3>
          {this.state.klipper}
          <button onClick={this.handleButtonClick.bind(this)}>Kappen</button>
          Hello, {formatName(petter)}!
          {tick()}
        </h3>
        <div className="footer">
          {header}
          <h3>
            ReactJS er et javascript framework
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
