import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link,withRouter } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';
import {teachers2} from './static';
const teachers=[{tid:1,name:"Harry",sid:1,sub:"Math"},{tid:2,name:"Mary",sid:2,sub:"Physics"}];
//var teacherlength=window.$teachers.length;
const temp=[];
window.$temp=[];
class manageteacher extends Component{



 constructor(props)
 {
   super(props);
   this.state = {teach:[{tid:1,name:"Harry",sid:1,sub:"Math"},{tid:2,name:"Mary",sid:2,sub:"Physics"}]}
 }
 

  addteacher()
  {
    
    document.getElementById("myForm").style.display='block';


  }
  confirmteacher=(e)=>
  {
  
    var d={};
    //teacherlength=teacherlength+1;
    //d['tid']=teacherlength;
    e.preventDefault();
    var elements = document.getElementById("teacherform").elements;
    for(var i = 0 ; i < elements.length-2 ; i++){
        var item = elements[i];
        d[item.name]=item.value;

    }
    console.log(d);
    temp.push(d);
    teachers.push(d);
    console.log(temp);
    window.$temp=temp;
    this.setState({teach:this.state.teach.push(d)});
    //document.getElementById("third").style.display="block";
    //console.log(window.$teachers);

  }
render() {

  
 
    return (

   
<div> 
<nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav w-100">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            </ul>
          
        
        </div>
      </nav>
      <div class="container">
     
             
      <center><h1 class="mt-4 pt-4" style={{position:"relative",top:-50}} >Teachers</h1></center>
      <div classname="teachers">
   
   {this.state.teach.map((teacher,index)=>(
     <div key={index}>
<div class="card bg-light">
      <div class="card-body">
      <button class="btn btn-danger float-right" style={{borderRadius: 20, height: 40,width: 185, marginTop: 6}} >Delete teacher</button>
     
      <Link to="/preppaper" class="btn btn-success float-right" style={{borderRadius: 20, height: 40,width:225, marginTop: 6}} >Request to prepare paper</Link>
       
   <div class="h5 d-inline"><b>Name:</b>&nbsp;&nbsp;{this.state.teach[index].name}</div>
        <div class="h5"><b>Subject:</b>&nbsp;&nbsp;{this.state.teach[index].sub}</div>
        <div class="h5"><b>Teacher id:</b>&nbsp;&nbsp;{this.state.teach[index].tid}</div>
      
      </div>
    </div>
     </div>

   ))}
   
   <div class="card bg-light" style={{display:"none"}} id="third">
      <div class="card-body">
      <button class="btn btn-danger float-right" style={{borderRadius: 20, height: 40,width: 185, marginTop: 6}} >Delete teacher</button>
     
      <Link to="/preppaper" class="btn btn-success float-right" style={{borderRadius: 20, height: 40,width:225, marginTop: 6}} >Request to prepare paper</Link>
       
   <div class="h5 d-inline"><b>Name:</b>&nbsp;&nbsp;Ron</div>
        <div class="h5"><b>Subject:</b>&nbsp;&nbsp;Chemistry</div>
        <div class="h5"><b>Teacher id:</b>&nbsp;&nbsp;3</div>
      
      </div>
    </div>
  
    </div>
  </div>
  <br></br><br></br>
  <div >
  
      <button type="button" id="atb" class="btn btn-success float-right " onClick={this.addteacher} >
        <b>Add teacher</b>&nbsp;
      <i class="fa fa-plus" aria-hidden="true" ></i>
    
      </button>
      <div class="form-popup" id="myForm" style={{display:'none'}}>
        <form  id="teacherform" class="form-container" onSubmit={this.confirmteacher} >
      
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
