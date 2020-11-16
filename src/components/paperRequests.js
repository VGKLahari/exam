import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link,withRouter } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';


window.$papers=[{pid:'math_9_2020',sid:1,sub:"Math",class:9},{pid:'phy_8_2020',sid:2,sub:"Physics",class:8}]

//var requestslength=window.$papers.length;
class paperRequests extends Component{
 constructor(props)
 {
   super(props);
   this.state={button:0};
 }

upload(index){
  var i = index+"paper";
  console.log(i);
  var v =document.getElementById(i);
  console.log(v);
document.getElementById(i).style.display="block";

}
finishupload(index)
{
  
document.getElementById(index).value="Uploaded";
}
render() {

  console.log("hii");
  console.log(window.$papers);
  const papers=window.$papers;
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
      <center><h1 class="mt-4 pt-4" style={{position:"relative",top:-50}}>Question Paper Requests</h1></center>
      <div classname="paperss">
   {papers.map((paper,index)=>(
     <div key={index}>
<div class="card bg-light">
      <div class="card-body">
     
      <input type="button" id={index} onClick={()=>this.upload(index)} class="btn btn-success float-right" style={{borderRadius: 20, height: 40,width:225, marginTop: 6}} value="Upload Paper" ></input>
       
   <div class="h5 d-inline"><b>Paper Code:</b>&nbsp;&nbsp;{paper.pid}</div>
        <div class="h5"><b>Subject:</b>&nbsp;&nbsp;{paper.sub}</div>
        <div class="h5"><b>Subject id:</b>&nbsp;&nbsp;{paper.sid}</div>
       < div class="h5"><b>Class:</b>&nbsp;&nbsp;{paper.class}</div> 
        <div id={index+"paper"} style={{display:"none"}}>
          <form class="form-group"  onSubmit={()=>this.finishupload(index)}>
            <input type="file" ></input>
            <br></br>
            <br></br>
            <input type="submit" class="btn-success"></input>
          </form>

        </div>
      
      </div>
    </div>
     </div>
   ))}
   
    </div>
  </div>
  
    </div>
    );
  }
}

export default withRouter(paperRequests);