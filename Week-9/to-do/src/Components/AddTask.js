import React from "react";

function AddTask() {
  return (
    <div className="task-card">
      <h4 className="card-heading">Add Task</h4>
      <form action="/" className="add-task">
        <input
          type="text"
          name="task-title"
          id="task-title"
          placeholder="Add Task Title"
        />
        <textarea
          name="task-desc"
          id="task-desc"
          cols="30"
          rows="5"
          placeholder="Add Description of task"
          maxLength={90}
        ></textarea>
      </form>
      <button className="btn btn-theme">Add Note</button>
    </div>
  );
}

export default AddTask;
