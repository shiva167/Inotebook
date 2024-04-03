import React from "react";

import {
   Link,useNavigate ,useLocation} from "react-router-dom";
  
   
   const Navbar=()=>{
    let navigate = useNavigate();
    const handleLogout=()=>{
      localStorage.removeItem('token');
      navigate('/login')
    }
     let location = useLocation();
  //    React.useEffect(() => {
  //  console.log(location.pathname)
  //    }, [location]);
     return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#ccc",height:'50px'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{fontWeight:"700",outline:"1px #ccc"}} to="/"><span>E</span>ven<span>N</span>ote</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item"> 
        <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
        <Link className="btn  mx-2" style={{backgroundColor:"#8c2be7ce",color:"#ccc"}} to='login' role="button">Login</Link>
        <Link className="btn  mx-2" style={{backgroundColor:"#8c2be7ce",color:"#ccc"}} to='signup' role="button">Signup</Link>

      </form>:<button onClick={handleLogout} style={{backgroundColor:"#8c2be7ce",color:"#ccc"}} className="btn ">Logout</button>}
    </div>
  </div>
</nav>
    )
}
export default Navbar