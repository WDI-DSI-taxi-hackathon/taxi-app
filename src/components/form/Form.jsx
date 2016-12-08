     import React, { Component } from 'react';
     import './Form.css';

     class Form extends Component {

      render(){
        return(
          <div>
            <form action = "http://localhost:4000/result" method = "POST">
              <div id="flex-parent">
               <p>Day of the week
                   <select id="Day" name="Day">
                      <option value='0'>Sun</option>
                      <option value='1'>Mon</option>
                      <option value='2'>Tue</option>
                      <option value='3'>Wed</option>
                      <option value='4'>Thru</option>
                      <option value='5'>Fri</option>
                      <option value='6'>Sat</option>
                      <option value='7'>Sun</option>
                  </select>
               </p>
               <p>Pickup Hour
                  <select id="pickuphour" name="pickuphour">
                      <option value="00">00</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="10">14</option>
                      <option value="11">15</option>
                      <option value="12">16</option>
                      <option value="10">17</option>
                      <option value="11">18</option>
                      <option value="12">19</option>
                      <option value="10">20</option>
                      <option value="11">21</option>
                      <option value="12">22</option>
                      <option value="12">23</option>
                </select>
               </p>
               </div>
               <p id="zip">Zipcode <input type = "int" name = "Zipcode" /></p>
              <div id="test">
               <p id="submit-button"><input type = "submit" value = "submit" /></p>
              </div>
            </form>
        </div>
      );
    }
  }

  export default Form;
