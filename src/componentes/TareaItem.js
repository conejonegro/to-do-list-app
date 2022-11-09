import React from 'react';
import '../css/tarea-item.css';
// ICONS
import { FaSkullCrossbones } from 'react-icons/fa';
import { FaSmileBeam } from 'react-icons/fa';

function TareaItem({tituloTarea, status, tareas, completarTarea, borrarTarea}){

    return(

        <React.Fragment>
            
            <li className = { `tarea-item ${ status && 'tarea-completada' }` } >
                <span 
                    onClick = { completarTarea }
                    value = {tareas}
                >
                    <FaSmileBeam />
                </span>

                { tituloTarea }

                <span 
                    onClick={ borrarTarea }
                    value = {tareas}
                >

                    <FaSkullCrossbones />

                </span>
            </li>
            
        </React.Fragment>

    )
}

export default TareaItem;
