
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link,withRouter } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';

const teachers=[{tid:1,name:"Lahari",sid:1,sub:"Math"},{tid:2,name:"Prathyusha",sid:2,sub:"Physics"}];
//var teacherlength=window.$teachers.length;
class manageteacher extends Component{
 

  addteacher()
  {
    
    document.getElementById("myForm").style.display='block';


  }
  confirmteacher=(e)=>
  {
  
    var d={};
    //teacherlength=teacherlength+1;
    //d['tid']=teacherlength;
    var elements = document.getElementById("teacherform").elements;
    for(var i = 0 ; i < elements.length-2 ; i++){
        var item = elements[i];
        d[item.name]=item.value;

    }
    console.log(d);
    teachers.push(d);
    
    //console.log(window.$teachers);

  }
render() {

  console.log(window.$teachers);
  const teachers=window.$teachers;
    return (

   
<div>
      <div class="container">          
      <center><h1 class="mt-4 pt-4" style={{position:"relative",top:-50}}>Teachers</h1></center>
      <div classname="teachers">
   {teachers.map((teacher,index)=>(
     <div key={index}>
<div class="card bg-light">
      <div class="card-body">
      <button class="btn btn-danger float-right" style={{borderRadius: 20, height: 40,width: 185, marginTop: 6}} >Delete teacher</button>
     
      <button class="btn btn-success float-right" style={{borderRadius: 20, height: 40,width:225, marginTop: 6}} >Request to prepare paper</button>
       
   <div class="h5 d-inline"><b>Name:</b>&nbsp;&nbsp;{teacher.name}</div>
        <div class="h5"><b>Subject:</b>&nbsp;&nbsp;{teacher.sub}</div>
        <div class="h5"><b>Teacher id:</b>&nbsp;&nbsp;{teacher.tid}</div>
      
      </div>
    </div>
     </div>
   ))}
   
    </div>
  </div>
  <div class="buttonRight">
  
      <button type="button" id="atb" class="btn btn-success  " onClick={this.addteacher} >
        <b>Add teacher</b>&nbsp;
      <i class="fa fa-plus" aria-hidden="true" ></i>
    
      </button>
      <div class="form-popup" id="myForm" style={{display:'none'}}>
        <form method="GET" id="teacherform" class="form-container" onSubmit={this.confirmteacher} >
      
          <label for="name"><b>Name</b></label>
          <input type="text" placeholder="Enter name" name="name" required />
          <br></br>
          <label for="sub"><b>Subject</b></label>
          <input type="text" placeholder="Enter subject" name="sub" required/>
          <br></br>
          <label for="sid"><b>SubjectID</b></label>
          <input type="text" placeholder="Enter Subject ID" name="sid" required/>
          <button type="submit" class="btn">Submit</button>
          <button type="button" class="btn cancel">Close</button>
        </form>
      </div>
    </div>
    </div>
    );
  }
}

export default withRouter(manageteacher);
