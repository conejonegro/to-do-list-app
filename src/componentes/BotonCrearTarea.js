import React from 'react';
import '../css/boton-agregar.css';
// import TareaItem from './TareaItem';

function BotonCrearTarea(props){

// DECLARACION DEL ESTADO DE LAS TAREAS
    const [tareas, actualizarTareas] = React.useState(0);

// FUNCION PARA CREAR TAREAS
    const crearTarea = (msg) => { 

        console.log(msg)
        console.log(tareas);

        actualizarTareas(tareas + 1);
     
    };

    return (

        <React.Fragment>

            <p>{`has creado: ${ tareas } tareas en total`}</p>

            <button 
                className="crear-tarea"
                value = {tareas}
                onClick = { () => crearTarea("Se abrira el modal para crear tarea") }
            >
                Crear Nueva Tarea
            </button>

        </React.Fragment>

    )

}

export default BotonCrearTarea;