import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      AvgSpd: 0,
      tipAmount: 0,
      totalAmount: 0,
      tripDistance: 0,
      tripCount: 0,
      data: []
    }
  };

  getTaxiData() {
    fetch(`/taxis`)
      .then(r => r.json())
      .then((data) => {
        console.log('here is our ', data);
        this.setState({
          data: data
        })
    })
  };


  render(){
    return (
      <div>
        <h1>Hey</h1>
        getTaxiData={() => this.getTaxiData()}
      </div>
    );
  }
}

export default App;