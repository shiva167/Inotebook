import React, { useContext, useState } from 'react';
import noteContext from "../Context/Notes/noteContext"
import '../App.css'
const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();  ////page reload na ho 
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "default" })
    props.showAlert("Added Successfully", "success")

  }
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (

    <div className="container">
      <div className="form-loginh1 my-2">
        <h1>Add note</h1>
      </div>
      <div id="loginbox" style={{ marginTop: "50px" }} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div className="panel panel-info" >

          <div style={{ paddinTop: "30px" }} className="panel-body" >

            <div style={{ display: "none" }} id="login-alert" className="alert alert-danger col-sm-12"></div>

            <form id="loginform" action='' className="form-horizontal" >

              <div style={{ marginBottom: "25px" }} className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                <input id="title" type="text" value={note.title} onChange={onchange} className="form-control" name="title" placeholder="Title" />
              </div>


              <div style={{ marginBottom: "25px" }} className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                <input id="description" type="text" value={note.description} onChange={onchange} className="form-control" name="description" placeholder="Description" />
              </div>


              <div style={{ marginBottom: "25px" }} className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                <input id="tag" type="text" value={note.tag} onChange={onchange} className="form-control" name="tag" placeholder="Tag" />
              </div>
             <div style={{ marginTop: "8px" }} className="form-group">
             <div className="col-sm-12 controls" >
                  <button disabled={note.title.length < 5 || note.description.length < 5} type='submit' onClick={handleClick}>Add</button>
              </div>
              </div>
     </form>


          </div>
        </div>
      </div>
      {/* <div className="container my-3">
  <h2>Add Note</h2>
  <form action="">
  <div className="mb-3">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" name='title' value={note.title}  onChange={onchange} minLength={5} required/>
</div>
<div className="mb-3">
  <label htmlFor="description" className="form-label">Description</label>
  <input type="text" className="form-control" id="description" name='description'value={note.description}  onChange={onchange}minLength={5} required/>
</div>
<div className="mb-3">
  <label htmlFor="tag" className="form-label">Tag</label>
  <input type="text" className="form-control" value={note.tag} id="tag" name='tag' onChange={onchange}/>
</div>
<button disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary" type="submit" onClick={handleClick}>Submit</button>

</form>
</div> */}
    </div>
  )
}
export default AddNote