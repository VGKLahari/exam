import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link,withRouter } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';
import EthCrypto from 'eth-crypto';


const exams=[{papercode:'eng_9_2020',class:9,duration:'9am to 12pm',start:new Date(2020,12,5,9,0,0),end:new Date(2020,12,5,12,0,0),subject:"English"},
{papercode:'math_9_2020',class:9,duration:'1pm to 4pm',start:new Date(2020,12,5,1,0,0),end:new Date(2020,12,5,4,0,0),subject:"Math"}]

class superintendent extends Component{
 
constructor(props)
{
  this.state={hash:''}
}
getpaper(id,start)
{
    var d= (id+'msg');
    console.log(id,d);
    document.getElementById(d).style.display="block";
    var date=new Date();
    

}
async decrypt()
{
  const p = document.getElementById("prikey").value;
  this.state.hash =" QmYac53eA78Rwn1tz113VGBBgyDC6WobgUTGDLFwryzXVE";
    const encrypted_obj = EthCrypto.cipher.parse(this.state.hash);
    const decrypted_string = await EthCrypto.decryptWithPrivateKey(p, encrypted_obj);

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

      <button id={exam.papercode} onClick={()=>this.getpaper(exam.papercode,exam.start)} class="btn btn-success float-right" style={{borderRadius: 20, height: 40,width:225, marginTop: 6}} >Get paper</button>
       
       

   <div class="h5 d-inline"><b>Subject:</b>&nbsp;&nbsp;{exam.subject}</div>
        <div class="h5"><b>Paper code:</b>&nbsp;&nbsp;{exam.papercode}</div>
        <div class="h5"><b>Duration:</b>&nbsp;&nbsp;{exam.duration}</div>
        <div class="h5"><b>Class:</b>&nbsp;&nbsp;{exam.class}</div>
        <div id={exam.papercode+"msg"} style={{display:'none'}} > 
        {(()=>{
          var date=new Date();
          if(Math.abs(exam.start-date)<=3600000)
          {
              return (<div>
                Enter private key for decrypting hash
                <div class="form-group">
                <form onSubmit={()=>this.decrypt} style={{backgroundColor:"#DCDCDC"}} method="POST" id="privatekey" class="form-container" onSubmit={this.decrypt} >
      
          <label for="name"><b>Private key :</b></label>
          <input id="prikey "type="password" placeholder="Enter private key" name="pkey" required />
          <button type="submit" class="btn-success btn-sm">Submit</button>
        </form></div><br></br>
        <a class="btn-success btn-sm" href="http://ipfs.infura.io/ipfs/QmYac53eA78Rwn1tz113VGBBgyDC6WobgUTGDLFwryzXVE" download="w3logo">Download paper</a>
              </div>);
          }
          else
          {
              return (<center><h3>Request denied</h3></center>)
          }
        })()}

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

export default withRouter(superintendent);