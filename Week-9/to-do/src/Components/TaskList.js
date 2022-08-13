import React, {useEffect, useState} from 'react';
import AddTask from './AddTask';
import Task from './Task';

//! Parent function of all component and child App...
function TaskList() {
  const [tasks, setTasks] = useState(initTask)
  //Storing Task as element of array in local storage
  let initTask;
  if(localStorage.getItem('tasks')=== null) initTask=[];
  else initTask = JSON.parse(localStorage.getItem('tasks'));

  //Receiving the string stored in local storage using useEffect Hook
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks])

  //function to add task with spaces in text
  const addTask = task => {
    if(!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    //! task is new task and ...tasks will keep record of previous tasks
    const newTasks = [task,...tasks];
    setTasks(newTasks);
  };

  //function to update task by mapping the id 
  const updateTask = (taskId, newValue)=>{
    //!checking for extra spaces between two character or empty string made using spaces
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    //! by using ternary,if id is matched then update to new value or return item it self 
    setTasks(prev => prev.map(item => item.id === taskId ? newValue : item))
  }
  
  //function to remove task using filter 
  const removeTask = id =>{
    //! filtering the elements which does not have same id as clicked one and setting up new array
    const removedArray = [...tasks].filter(task => task.id !== id);
    setTasks(removedArray);
  }

  //function to mark task as completed by clicking checkbox
  const completeTask = id => {
    //! making a new array by checking task marked as completed using map
    let updatedTasks = tasks.map(task =>{
      if(task.id === id) task.isComplete = !task.isComplete;
      return task
    })
    setTasks(updatedTasks)
  };

  //render function
  return (
    <div>
      <h1>Schedule your day!</h1>
      <AddTask onSubmit={addTask}></AddTask>
      <Task tasks = {tasks} completeTask = {completeTask} removeTask={removeTask} updateTask={updateTask}/>
    </div>
  )
}

export default TaskList;
