import React, {useState} from 'react';
import TaskList from './TaskList';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

function Todo(props) {
    const [edit,setEdit] = useState({
        id:null,
        value:''
    })
  return props.tasks.map((task,index) =>(
    <div className={task.isComplete ? 'task-row complete':'task-row'} key={index}>
        <div key={task.id} onClick={()=>props.completeTask(task.id)}>
            {task.text}
        </div>
        <div className="icons">
            <RiCloseCircleLine/>
            <TiEdit/>
        </div>
    </div>
  ))
}

export default Todo
