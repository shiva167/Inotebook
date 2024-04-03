import React, { useContext, useEffect, useRef,useState } from "react";
import noteContext from "../Context/Notes/noteContext";
import NoteItem from "./NoteItem"
import AddNote from './AddNote'
import { useNavigate } from "react-router-dom";
const Notes = (props) => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNote,editNote} = context;
  useEffect(() => {
    if(localStorage.getItem('token')){
      getNote(); 
    }else{
 navigate("/login");
    }
    // eslint-disable-next-line 
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""})
  const updatenote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle: currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  
  }
  const handleClick = (e) => {
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
    props.showAlert("Updated Successfully","success")


  }
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button type="button" ref={ref} className="btn btn-primary d-none"  data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onchange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" value={note.edescription} name='edescription' onChange={onchange} minLength={5} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" value={note.etag} name='etag' onChange={onchange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h3>Your Note</h3>
      <div className="container mx-2">
        {notes.length===0 && 'No notes to display'}
        </div>
        {
          (notes && notes.length>0)
?

        
          notes.map((note) => {

          return <NoteItem key={note._id} updatenote={updatenote} showAlert={props.showAlert} note={note} />
        })
      : null}
      </div>
    </>
  )
}
export default Notes 