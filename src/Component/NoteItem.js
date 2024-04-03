import React,{useContext} from "react";
import noteContext from "../Context/Notes/noteContext";

const NoteItem = (props)=>{
  const context=useContext(noteContext);
      const {deleteNote }=context;
    const {note,updatenote}=props;
    return (
<div className="col-md-3">
{/* {note.title}
{note.description} */}
<div className="card my-3" style={{backgroundColor:"#ccc"}}> 
  
  <div className="card-body">
    <h5 className="card-title">{ note.title}</h5>
    <p className="card-text">{note.description} 
    </p>
    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully","success")
    }}></i>
  <i className="fa-solid fa-pencil mx-2" onClick={()=>{updatenote(note)}}></i>
  
 </div>
</div>
</div>



    )
}
export default NoteItem