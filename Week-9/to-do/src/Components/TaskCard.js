import React from "react";

function TaskCard(props) {
  return (

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a href="/" className="btn btn-theme">
            Delete
          </a>
          <a href="/" className="btn btn-theme edit">
            Edit
          </a>
        </div>
      </div>
  );
}

export default TaskCard;
