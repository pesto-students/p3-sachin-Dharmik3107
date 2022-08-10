import React, {useState} from 'react';
import AddTask from './AddTask';
import Todo from './Todo';

function TaskList() {
  const [tasks, setTasks] = useState([])

  const addTask = task => {
    if(!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [task,...tasks];
    setTasks(newTasks);
  };
  const completeTask = id => {
    let updatedTasks = tasks.map(task =>{
      if(task.id === id) task.isComplete = !task.isComplete;
      return task
    })
    setTasks(updatedTasks)
  }
  return (
    <div>
      <h1>Schedule your day!</h1>
      <AddTask onSubmit={addTask}></AddTask>
      <Todo tasks = {tasks} completeTask = {completeTask}/>
    </div>
  )
}

export default TaskList
