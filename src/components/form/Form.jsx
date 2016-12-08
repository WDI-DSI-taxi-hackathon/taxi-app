import React, { Component } from 'react';

class Form extends Component {

constructor() {
    super();

    this.state = {
      zipcode: '',
      day: '',
      hour: ''
    };
  }

  updateDay(event) {
  this.setState ({
    day: event.target.value
    })
  }

  updateHour(event) {
  this.setState ({
    hour: event.target.value
    })
  }

  updateZip(event) {
  this.setState ({
    zipcode: event.target.value
    })
  }

postData() {
  const form = new FormData();
  form.append('zipcode', this.state.zipcode);
  form.append('day', this.state.day);
  form.append('hour', this.state.hour);
  fetch('http://localhost:4000/result', {
    method: 'POST',
    body: form,
  })
  .then(r => r.json())
  .then(console.log)
  .catch(console.log)
}



  render(){
    return(
      <div>

        <p>Day
         <select id="day" name="day" onChange={(e) => this.updateDay(e)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </p>

          <p>Hour <input type = "int" name = "hour" onChange={(e) => this.updateHour(e)} /> </p>
         <p>Zipcode <input type = "int" name = "zipcode" onChange={(e) => this.updateZip(e)} /></p>

       <input type = "submit" value = "submit" onClick={() => this.postData()} />
      </div>
    );
  }
}

  export default Form;

