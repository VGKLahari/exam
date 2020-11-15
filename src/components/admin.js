
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link,withRouter } from 'react-router-dom';
import Web3 from 'web3';
import './App.css';
class admin extends Component
{
render()
{
    return(
        <div >
          <center><h1>ADMIN</h1></center>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg ">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav w-100">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            </ul><ul class = "nav justify-content-end">
          
        </ul>
        </div>
      </nav>
  <div class="jumbotron"> 
        <div id="a" class="container text-center" >
      <Link class="btn btn-primary w-50 text-left" to="/manageteacher" role="button" >&emsp;&emsp;&emsp;<i class="fas fa-users"></i>&emsp;&emsp;&emsp;&emsp;&emsp;<b>Add a teacher</b></Link><br></br><br></br>
      <Link class="btn btn-primary w-50 text-left" to="#" role="button" >&emsp;&emsp;&emsp;<i class="fas fa-school"></i>&emsp;&emsp;&emsp;&emsp;&emsp;<b>Add a center</b></Link><br></br><br></br>
      <Link class="btn btn-primary w-50 text-left" to="/manageteacher" role="button" >&emsp;&emsp;&emsp;<i class="fas fa-users-slash">&emsp;</i>&emsp;&emsp;&emsp;&emsp;<b>Delete a teacher</b></Link><br></br><br></br>
      <Link class="btn btn-primary w-50 text-left" to="#" role="button" >&emsp;&emsp;&emsp;<i class="fas fa-store-slash"></i>&emsp;&emsp;&emsp;&emsp;&emsp;<b>Delete a center</b></Link><br></br><br></br>
      <Link class="btn btn-primary w-50 text-left" to="/manageteacher" role="button" >&emsp;&emsp;&emsp;<i class="fas fa-users"></i>&emsp;&emsp;&emsp;&emsp;&emsp;<b>Request a teacher</b></Link><br></br><br></br>
      </div>
     
  </div>
  </div>
    );
    }
    }
export default withRouter(admin);
