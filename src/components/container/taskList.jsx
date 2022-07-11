import React,{useState} from 'react';
import PropTypes from 'prop-types';
import '../../css/taskList.css';
import {TaskClass} from '../../models/task.class.js'
import Task from '../pure/task';
import { LEVELS } from '../../models/levels.enum';
import TaskFormik from '../pure/forms/taskFormik';


const TaskList = () => {

    // const listaTasks = [
    //     new TaskClass("Tarea 1","Hacer Tarea 1",false,LEVELS.NORMAL),
    //     new TaskClass("Tarea 2","Hacer Tarea 2",false,LEVELS.BLOQUEANTE),
    //     new TaskClass("Tarea 3","Hacer Tarea 3",false,LEVELS.URGENTE),
    // ]

    const [tasks,setTasks] = useState([]);
    const [aggTask,setAggTask] = useState(false);

    const removeTask = (task)=>{
        const indexTask = tasks.indexOf(task);
        const listModified = [...tasks];
        listModified.splice(indexTask,1);
        setTasks(listModified);
    }

    const changeStatus = (task)=>{
        const indexTask = tasks.indexOf(task);
        const listModified = [...tasks];
        listModified[indexTask].completed=!listModified[indexTask].completed;
        setTasks(listModified);
    }
    
    const addTask = (task)=>{
        const listModified = [...tasks];
        listModified.push(new TaskClass(task.title,task.description,false,task.priority));
        setTasks(listModified);
    }

    return (
        <div className='TaskList'>
        {
            tasks.length>0 ? 
            (
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Prioridad</th>
                            <th>Acciones</th>  
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tasks.map((elemento,index)=>
                            <Task 
                            key={index} 
                            tarea={elemento}
                            removeTask={removeTask}
                            changeStatus={changeStatus}
                            />
                        )
                    }
                    </tbody>
                </table>
            )
            :
            (
                <div className='mt-5'><h2>Debes Introducir una tarea</h2></div>
            )

        }
            
            <button onClick={()=>setAggTask(true)}>Añadir tarea</button>
            {
                aggTask && <TaskFormik addTask = {addTask}></TaskFormik>
            }
            

        </div>

    );
};


TaskList.propTypes = {

};


export default TaskList;
