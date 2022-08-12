import React, { useState } from "react";

function AddTask(props) {
  const [input, setInput] = useState("");
  //function to handle change on value of text
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //function to add task and generate unique id for each task
  //! add task function will provided as props in parent component
  const handleAddTask = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    //after adding task setting input again as empty to add new task
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleAddTask}>
      {/* ternary operator to select edit or add */}
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Add a Task"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
          />
          <button className="todo-button edit" onClick={handleAddTask}>
            Update
          </button>{" "}
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a Task"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
          />
          <button className="todo-button" onClick={handleAddTask}>
            Add
          </button>{" "}
        </>
      )}
    </form>
  );
}

export default AddTask;
