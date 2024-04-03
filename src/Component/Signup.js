import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'
export const Signup = (props) => {
  let navigate= useNavigate();
  const [credentials,setCredentials]=useState({name:" ",email:"",password:"",cpassword:""})

const handleSubmit = async(e)=>{
    e.preventDefault();   
    const {name,email,password}=credentials;
    const response = await fetch('http://localhost:5000/api/auth/createuser',{
      method : 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name,email,password})
});
    const json = await response.json();
    console.log(json)
    if(json.success){
      //save the authtoken and redirect
      localStorage.setItem('token',json.authtoken);
      props.showAlert("Account created Successfully","success")
      navigate("/");

    }else{
      props.showAlert("Invalid Credentials","danger")
    }
  }
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); 
  }
  return (
 <div className="container">
 <div className="form-loginh1 my-3 " >
<h1>Sign Up</h1>
</div>
  <div className="row ">
    <div className="col mainbox2">        
 
  <div id="loginbox"  className="mainbox1 col-md-10 col-md-offset-3 col-sm-1 col-sm-offset-4">                    
  <div className="panel panel-info" >
            <div className="panel-heading">
                {/* <div style={{float:"right", fontSize: "80%", position: "relative", top:"-10px"}}></div> */}
            </div>     

            <div style={{paddinTop:"30px"}} className="panel-body" >

                <div style={{display:"none"}} id="login-alert" className="alert alert-danger col-sm-12"></div>
        
    <form id="loginform" className="form-horizontal" onSubmit={handleSubmit} >
                
        <div style={{marginBottom: "25px"}} className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input id="name" onChange={onchange} type="text" className="form-control" name="name"  placeholder="name"/>                                        
                </div>
        <div style={{marginBottom: "25px"}} className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input id="email" onChange={onchange} type="email" className="form-control" name="email"   placeholder="email"/>                                        
                </div>
            
        <div style={{marginBottom: "25px"}} className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input id="password"  type="password" onChange={onchange} className="form-control" name="password"  placeholder="password"/>
                </div>
                

                <div style={{marginBottom: "25px"}} className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input id="cpassword"  type="password" onChange={onchange} className="form-control" name="cpassword"  placeholder="confirm password"/>
                </div>
            
                <div className="my-2">
                                       <h5>Have an account?</h5>      <a href='/login' style={{color:'#ccc'}}>Login</a>
                                      </div>
                                      
            
        <div>
                  <div className="checkbox">
                    <label>
                      <input id="login-remember" style={{backgroundColor:"#8c2be7ce"}} type="checkbox" name="remember" value="1" required/> Remember me
                    </label>
                  </div>
                </div>
            <div style={{marginTop:"8px"}} className="form-group">
            <div className="col-sm-12 controls" >
            <button   type='submit'  className='btn'>Sign Up</button>

                </div>
            </div>
       </form>
</div>
</div>
</div>
</div>
<div className="col mainbox3">

</div>
    </div>                     

</div>
)
}
 

