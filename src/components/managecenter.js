
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link,withRouter } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';

const centres=[{cid:733001,centername:"LLPS",add:"Vanasthalipuram,Hyd"},
{cid:733002,centername:"LLPS",add:"Vanasthalipuram,Hyd"}]

const clength = centres.length;
class managecenter extends Component{
 

  addcenter()
  {
    
    document.getElementById("form").style.display='block';


  }
  confirmcenter=(e)=>
  {
  
    var d={};
    
    var elements = document.getElementById("teacherform").elements;
    for(var i = 0 ; i < elements.length-2 ; i++){
        var item = elements[i];
        d[item.name]=item.value;

    }
    centres.push(d);
    

  }
render() {

 
    return (

   
<div>
      <div class="container">          
      <center><h1 class="mt-4 pt-4" style={{position:"relative",top:-50}}>Exam Centers</h1></center>
      <div classname="centers">
   {centres.map((center,index)=>(
     <div key={index}>
<div class="card bg-light">
      <div class="card-body">
      <button class="btn btn-danger float-right" style={{borderRadius: 20, height: 40,width: 185, marginTop: 6}} >Delete centre</button>
     
       
   <div class="h5 d-inline"><b>Centre Name:</b>&nbsp;&nbsp;{center.centername}</div>
        <div class="h5"><b>Centre code:</b>&nbsp;&nbsp;{center.cid}</div>
        <div class="h5"><b>Centre address:</b>&nbsp;&nbsp;{center.add}</div>
      
      </div>
    </div>
     </div>
   ))}
   
    </div>
  </div>
  <div class="buttonRight">
  
      <button type="button" id="atb" class="btn btn-success  " onClick={this.addcenter} >
        <b>Add centre</b>&nbsp;
      <i class="fa fa-plus" aria-hidden="true" ></i>
    
      </button>
      <div class="form-popup" id="form" style={{display:'none'}}>
        <form method="GET" id="centerform" class="form-container" onSubmit={this.confirmcenter} >
      
          <label for="name"><b>Test centre name</b></label>
          <input type="text" placeholder="Enter name" name="centername" required />
          <br></br>
          <label for="sub"><b>Centre code</b></label>
          <input type="text" placeholder="Enter Centre Code" name="cid" required/>
          <br></br>
          <label for="sid"><b>Address</b></label>
          <input type="text" placeholder="Enter Address" name="add" required/>
          <button type="submit" class="btn">Submit</button>
          <button type="button" class="btn cancel" onclick={()=>{document.getElementById("form").style="none"}}>Close</button>
        </form>
      </div>
    </div>
    </div>
    );
  }
}

export default withRouter(managecenter);
