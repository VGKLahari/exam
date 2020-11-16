import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link,withRouter } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';

class preppaper extends Component
{


    render()
    
    { 
        console.log("hi");
        return(
            <div>
            <center>   
         <form class="form-container">
             
         <label for="name"><b>Teacher ID</b></label>
          <input type="text" placeholder="Enter teacher id" name="name" required />
          
          <br></br>
          <label for="sub"><b>Subject</b></label>
          <input type="text" placeholder="Enter subject" name="sub" required/>
          <br></br>
          <label for="sid"><b>Paper code</b></label>
          <input type="text" placeholder="Enter Paper Code" name="sid" required/>
          <label for="sid"><b>Date</b></label>
          <input type="date"  name="sid" required/>
          <br></br>
          <label for="sid"><b>Time</b></label>
          <input type="time"  name="sid" required/>
          <br></br>
          <label for="sid"><b>Class</b></label>
          <input type="text" placeholder="Class" name="sid" required/>
          <label for="sid"><b>Set</b></label>
          <input type="text" placeholder="Enter Set Number" name="sid" required/>
          
          <button type="submit" class="btn">Submit</button>
</form>
        
</center>   
      </div>
      
      );
    }
}
export default withRouter(preppaper);