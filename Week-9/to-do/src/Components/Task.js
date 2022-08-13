import React, {useState} from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import AddTask from './AddTask';

function Task(props) {
    //Declaring useState 
    const [edit,setEdit] = useState({
        id:null,
        value:''
    })

    //function to submit update which will call updateTask function provided in task in parent component
    const submitUpdate = value => {
        //!function called and id and value is set to null and empty respectively
        props.updateTask(edit.id, value);
        setEdit({
            id:null,
            value : ""
        });
    }
    
    //if edit id found then calling AddTask component and provided corresponding props
    if(edit.id){
        return <AddTask edit = {edit} onSubmit={submitUpdate}/>
    }

    //render function
    //! there will be two type of task 1.not completed or completed so it is identified using map function
  return props.tasks.map((task,index) =>(
    <div className={task.isComplete ? 'todo-row complete':'todo-row'} key={index}>
        <input type="checkbox" name="complete-task" id="complete" className='checkbox' onClick={()=>props.completeTask(task.id)} />
        <div key={task.id}>
            {task.text}
        </div>
        <div className="icons">
            <RiCloseCircleLine onClick={()=> props.removeTask(task.id)} className="delete-icon"/>
            <TiEdit onClick={()=>setEdit({id:task.id,value:task.next})} className="edit-icon"/>
        </div>
    </div>
  ))
}

export default Task;
