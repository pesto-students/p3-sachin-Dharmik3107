import React, {useState} from 'react'

function AddTask(props) {

  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleAddTask = e => {
    e.preventDefault();
    props.onSubmit({
      id : Math.floor(Math.random()*10000),
      text : input
    })
    setInput('');
  }

  const [input,setInput] = useState('')
  return (
    <form className='todo-form' onSubmit={handleAddTask}>
      <input type="text" placeholder='Add a Task' value={input} name="text" className='todo-input' onChange={handleChange}/>
      <button className='todo-button' onClick={handleAddTask}>Add Task</button>
    </form>
  )
}

export default AddTask
