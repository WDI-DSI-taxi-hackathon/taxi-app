import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";
import Chart from "../../node_modules/d3act/lib/components/Chart";
import Form from './form/Form.jsx';


class App extends Component {
  constructor() {
    super();

    this.state = {
      AvgSpd: 0,
      tipPercent: 0,
      totalAmount: 0,
      tripDistance: 0,
      tripCount: 0,
      data: [],
      avgSpeed: {
        children: [
            { name: "Average Speed", value: 12.38 },
            { name: "Your Speed", value: 10 },
        ]},
      tipAmount: {
        children: [
            { name: "Average Tip Percent", value: 19.33 },
            { name: "Your Tip Percent", value: 9 },
        ]},
      totalAmount: {
        children: [
            { name: "Average Total Amount", value: 16.03 },
            { name: "Your Total Amount", value: 0 },
        ]},
       tripDistance: {
        children: [
            { name: "Average Trip Distance", value: 2.67 },
            { name: "Your Trip Distance", value: 0 },

        ]}
    }
  };

  getTaxiData() {
    console.log('getting taxi data')
    fetch(`/taxis`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
          data: data[0].Avg_spd
        })
    })
  };


  render(){
    return (
      <div>
        <div id="parent-div">
          <h1>Hey This Page Loaded!</h1>
          <Form />
          <p>hello {this.state.data}</p>
          <button onClick={this.getTaxiData.bind(this)}>click</button>
          <h2>Bubble Chart</h2>
          <div id="bubbles">
            <Chart
                type={"bubble"}
                diameter={200}
                showTooltips={true}
                data={this.state.avgSpeed}
            />
            <Chart
                type={"bubble"}
                diameter={200}
                showTooltips={true}
                data={this.state.tipAmount}
            />
            <Chart
                type={"bubble"}
                diameter={200}
                showTooltips={true}
                data={this.state.totalAmount}
            />
            <Chart
                type={"bubble"}
                diameter={200}
                showTooltips={true}
                data={this.state.tripDistance}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
