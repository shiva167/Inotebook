import React, { useState } from 'react'   ///rafce
import { useNavigate } from "react-router-dom";
import '../App.css';

import {
  Link} from "react-router-dom";
export const Login = (props) => {
  let navigate= useNavigate();
  const [credentials,setCredentials]=useState({email:"",password:""})
const handleSubmit = async(e)=>{
    e.preventDefault();   
    const response = await fetch('http://localhost:5000/api/auth/login',{
      method : 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})

});
    const json = await response.json();
    console.log(json)
    if(json.success){
      //save the authtoken and redirect
      localStorage.setItem('token',json.authtoken);  ///save kar rahe hai 
      props.showAlert("Logged in Successfully","success")
      navigate('/');


    }else{

      props.showAlert("Invalid Credentials","danger")
 
    }
  }
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); 
  }
  return ( 
    
    <div className="containers">    
<div className="form-loginh1">
<h1>Remind me</h1>
</div>
<div className="form-loginp">
<p>Note taking make easier</p>
</div>
<div className="row">
<div className="mainbox11 col">
</div>

        <div id="loginbox" style={{marginTop:"50px;"}} className="mainbox12 col col-md-5 col-md-offset-3 col-sm-6 col-sm-offset-2">                    
            <div className="panel panel-info" >
              
<h1 className='my-2 '>Welcome Back to <div>EvenNote</div></h1>
                    <div className="panel-heading row">
                        <div className="panel-title col my-1 " ><p>Login to continue to your account.</p>
                        </div>
<div className="lock col"></div>
                        {/* <div style={{float:"right", fontSize: "80%", position: "relative", top:"-10px"}}></div> */}
                    </div>     
                    <div style={{paddinTop:"30px"}} className="panel-body" >
                        <div style={{display:"none"}} id="login-alert" className="alert alert-danger col-sm-12"></div>
                        <form id="loginform" className="form-horizontal" onSubmit={handleSubmit} role="form">
                                    
                            <div style={{marginBottom: "35px"}} className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                        <input id="login-username" onChange={onchange} type="text" className="form-control" name="email" value={credentials.email}  placeholder="email"/>                                        
                                    </div>
                                
                            <div style={{marginBottom: "35px"}} className="input-group">
                                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                        <input id="login-password"  type="password" onChange={onchange} className="form-control" name="password" value={credentials.password} placeholder="password"/>
                                    </div>
                                    
                                    <div>
                                      <div className="my-2">
                                       <h5>Don't have an account?</h5>      <a href='/signup' style={{color:'#ccc'}}>Register</a>
                                      </div>
                                    </div>

                                
                            <div>
                                      <div className="checkbox">
                                        <label>
                                          <input className='my-2' id="login-remember" style={{backgroundColor:"#8c2be7ce"}} type="checkbox" name="remember" value="1" required/> Remember me
                                        </label>
                                      </div>
                                    </div>


                                <div style={{marginTop:"12px"}} className="form-group">
                       <div className="col-sm-12 controls" >
                    <button   type='submit'  className='btn'>Login</button>

                                    </div>
                                </div>


                            </form>     


                        </div>                     
                    </div>  
        </div>
</div>
    {/* <div className="container">

      <form className='forms' onSubmit={handleSubmit}>
    <div className="mb-3 row">
    <label  htmlFor="email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" value={credentials.email} onChange={onchange} className="form-control" id="email" name='email'  />
    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" value={credentials.password} onChange={onchange}  className="form-control" name='password' id="password" /> 
    </div>
  </div>
<button   type='submit' className='btn btn-primary'>Submit</button>
</form>  */}
  </div>
    )
}
