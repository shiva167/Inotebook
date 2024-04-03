import './App.css';
import React,{useState} from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar  from './Component/Navbar';
import {Home} from './Component/Home';
import About from './Component/About';
import NoteState from './Context/Notes/noteState';
import Alert from './Component/Alert';
import {Signup} from './Component/Signup';
import  {Login} from './Component/Login';

function App() {
  const[alert,setAlert]=useState(null);
   const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
   }
  // const[alert,setAlert]=useState(null);
  // const showAlert = (message)=>{
  //  setAlert({
  //    msg:message
  //  })
  //  setTimeout(() => {
  //    setAlert(null);
  //  }, 3000);
  // }
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>   
    <Alert alert={alert}/>
    <div className="container"> 
      < Routes>
          <Route path="/"
            element={<Home showAlert={showAlert}/>}>
          </Route>
          <Route path="/about"
           element={ <About />}>
          </Route>
          <Route path="/login"
            element={<Login showAlert={showAlert}/>}>
          </Route>
          <Route path="/signup"
           element={ <Signup showAlert={showAlert} />}>
          </Route>
    </Routes>
    </div>
    </Router>
    </NoteState>
</>
  );
}

export default App;
