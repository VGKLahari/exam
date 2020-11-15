import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link,withRouter } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';

class home extends Component{
render() {
    return (
      <div class="home">
        
      
      <nav class="navbar navbar-dark bg-primary navbar-expand-lg ">
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100 nav justify-content-end">
        <li class="nav-item active">
            <Link class="nav-link" to="/admin"><b>Admin</b> <span class="sr-only">(current)</span></Link>
          </li>
        
          <li class="nav-item active">
          <Link class="nav-link" to="/teacher"><b>Teacher</b> <span class="sr-only">(current)</span></Link>
          </li>
        
          <li class="nav-item active">
            <Link class="nav-link" to="/superintendent"><b>Superintendent</b> <span class="sr-only">(current)</span></Link>
          </li>
        
        
        </ul>
      </div>
    </nav>
   <div class="container">
      <center> <h1><b>EXAM PAPER MANAGEMENT PORTAL</b></h1> </center> 
      
    </div>
    </div>
    
    );
  }
}

export default withRouter(home);