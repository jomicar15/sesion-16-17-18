import React from "react";
import { useNavigate } from "react-router-dom";


const HomePage =()=> {
    let navigate = useNavigate();


    return (
        <div>
            <h1>HOMEPAGE</h1>
            <button onClick={()=>navigate('task-list')}>Añadir Tareas</button>
        </div>
    );
}

export default HomePage;