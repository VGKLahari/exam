import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link,withRouter } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';


const exams=[{papercode:'eng_9_2020',class:9,duration:'9am to 12pm',start:new Date(2020,12,5,9,0,0),end:new Date(2020,12,5,12,0,0),subject:"English"},
{papercode:'math_9_2020',class:9,duration:'1pm to 4pm',start:new Date(2020,12,5,1,0,0),end:new Date(2020,12,5,4,0,0),subject:"Math"}]
class superintendent extends Component{
 

getpaper(id,start)
{
    var d= document.getElementById(id+'msg');
    console.log(id,d);
    //document.getElementById(d).style.display="block";
    var date=new Date();
   /* if(Math.abs(start-date)<=3600000)
    {
        return <h1>Hello</h1>;
    }
    else
    {
        return <h2>HI</h2>;
    }*/

}
render() {

 
    return (

   
<div>
      <div class="container">          
      <center><h1 class="mt-4 pt-4" style={{position:"relative",top:-50}}>Today's Exams</h1></center>
 <div className="exams">
   {exams.map((exam,index)=>(
     <div key={index}>
<div class="card bg-light">
      <div class="card-body">

      <button  id="{{exam.papercode}}" onClick={()=>this.getpaper(this.id,exam.start)} class="btn btn-success float-right" style={{borderRadius: 20, height: 40,width:225, marginTop: 6}} >Get paper</button>
       
       

   <div class="h5 d-inline"><b>Subject:</b>&nbsp;&nbsp;{exam.subject}</div>
        <div class="h5"><b>Paper code:</b>&nbsp;&nbsp;{exam.papercode}</div>
        <div class="h5"><b>Duration:</b>&nbsp;&nbsp;{exam.duration}</div>
        <div class="h5"><b>Class:</b>&nbsp;&nbsp;{exam.class}</div>
      
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

export default withRouter(superintendent);