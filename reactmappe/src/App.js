import React, { Component } from 'react';
import { BrowserRouter as Router,
    Route,
    Link } from 'react-router-dom'
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

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h2>It is {this.props.asd.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {klipper: "Nei"}

  }
  handleButtonClick(){
    if (this.state.klipper === "Nei") {
      this.setState({klipper: "Ja", berntStyle: {width: "300px", height: "150px"}});

    }else {
      this.setState({klipper: "Nei", berntStyle: {width: "600px", height: "300px"}});
    }
  }
  render() {

    return (

      <div className="App">
        <div className="App-header">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Bilder">Bilder</Link></li>
            </ul>
          <h2>Sia til </h2><h1><b>Bernt</b></h1>
        </div>
        <div className="Nav">
          <h3>Hovedside   |   </h3>
        </div>
        <p className="App-intro">
        </p>
        <img src="Gressklipperroboten Bernt.jpg" style={this.state.berntStyle}/>
        <h3>
          {this.state.klipper}
          <button onClick={this.handleButtonClick.bind(this)}>Kappen</button>
          Hello, {formatName(petter)}!
          <Clock asd={new Date()}/>
          {tick()}
        </h3>

      </div>
    );
  }
}



export default App;
