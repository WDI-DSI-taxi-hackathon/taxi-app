import React, { Component } from 'react';

class Form extends Component {


    // <form action = "http://localhost:4000/result" method = "POST">
    //   <p>Day
    //      <select id="day" name="day">
    //         <option value='1'>1</option>
    //         <option value='2'>2</option>
    //         <option value='3'>3</option>
    //       </select>
    //    </p>
    //    <p>Hour <input type = "int" name = "hour" /></p>
    //    <p>Zipcode <input type = "int" name = "zipcode" /></p>

    //    <input type = "submit" value = "submit" />
    //   </form>


  render(){
    return(
      <div>
        <p>Day
         <select id="day" name="day">
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </p>
       <p>Hour <input type = "int" name = "hour" /></p>
       <p>Zipcode <input type = "int" name = "zipcode" /></p>

       <input type = "submit" value = "submit" />
      </div>
    );
  }
}

  export default Form;
