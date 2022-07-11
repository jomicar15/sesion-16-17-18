import React from 'react';
import '../../css/task.css';

const Task = ({tarea,removeTask,changeStatus}) => {

    const clase = tarea.completed ? "td-green" : "td-red";

    //Funcionalidad para terminar más adelante
    const clickPrioridad = ()=>{
        console.log("click sobre la prioridad")
    }
    
    return (
        <tr>
            <td className={clase}>{tarea.titulo}</td>
            <td className={clase}>{tarea.descripcion}</td>
            <td ><span onClick={clickPrioridad} className={tarea.level}>{tarea.level}</span></td>
            <td>
                {
                   tarea.completed ? 
                    (<i className="bi bi-toggle-on" style={{color:"green"}} onClick={()=>{changeStatus(tarea)}}></i>)
                    :
                    (<i className="bi bi-toggle-off" style={{color:"red"}} onClick={()=>{changeStatus(tarea)}}></i>)
                }
                <i className="bi bi-trash" onClick={()=>removeTask(tarea)}></i>             
            </td>
        </tr>
    );
};

export default Task;
