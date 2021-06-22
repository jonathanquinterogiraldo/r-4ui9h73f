import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);    
    this.state = { text: '' }
  } 

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={ (event) =>  this.setState({ text: event.target.value })} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
