import { useState } from "react";
import NoteContext  from "./noteContext";
const NoteState= (props)=>{
    // const s1={
    //     "name":"Shiva",
    //     "class":"5b"
    // }
    // const [state,setState]=useState(s1);
    // const update=()=>{
    //     setTimeout(()=>{
    //   setState({
    //     "name":"Shiv",
    //     "class":"10b"
    //   })
      
    //     },2000);
    // }
    const host = "http://localhost:5000"
    const notesInitial = [];
      const [notes,setNotes]=useState(notesInitial);
      // Get all note
  const getNote=async()=>{
    
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method : 'GET',
      headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token')
}
    });
  const json = await response.json();
      // console.log(json)
      setNotes(json)
    }
//add note
  const addNote=async(title,description,tag)=>{
    
  const response = await fetch(`${host}/api/notes/addnote`,{
    method : 'POST',
    headers:{
      'Content-Type':'application/json',
      'auth-token':localStorage.getItem('token')
      
    },
    body:JSON.stringify({title,description,tag})  ///thunder ke body bala part hai
  });
  const note = await response.json();
  setNotes(notes.concat(note));
  }
//delete note 
const deleteNote=async(id)=>{
  //API CALL
  const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
    method : 'DELETE',
    headers:{
      'Content-Type':'application/json',
      'auth-token':localStorage.getItem('token')
      
    }
  });
const json = response.json();
    const newNotes = notes.filter((note)=>{return note._id!==id});
  setNotes(newNotes); 
  }
//edit note
const editNote=async(id,title,description,tag)=>{
  // Api call
  
  const response = await  fetch(`${host}/api/notes/updatenote/${id}`,{
    method : 'PUT',
    headers:{
      'Content-Type':'application/json',
      'auth-token':localStorage.getItem('token')
 },
    body:JSON.stringify({title,description,tag})
  });
const json = await response.json();
let newNotes= JSON.parse(JSON.stringify(notes))  ////deep copy  bn jayega
  //Logic to edit a client
  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];  
    if(element._id===id){
      newNotes[index].title=title;
      newNotes[index].description=description;
      newNotes[index].tag=tag;
      break;
    }
}
    setNotes(newNotes);
}
     return (
        //  <NoteContext.Provider value={{state,update}}>  
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNote}}>  
        
        {props.children}
        </NoteContext.Provider>
     )
}
export default NoteState;