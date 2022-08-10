import React from "react";

function EditTask() {
  return(
  <div className="edit-card">
    <h4 className="card-heading">Edit Task</h4>
    <form action="/" className="add-task">
      <input
        type="text"
        name="task-title"
        id="task-title"
        placeholder="EditTask Title"
      />
      <textarea
        name="task-desc"
        id="task-desc"
        cols="30"
        rows="5"
        placeholder="Edit Description of task"
        maxLength={90}
      ></textarea>
    </form>
    <button className="btn btn-theme">Edit Task</button>
  </div>
  )
}
export default EditTask;