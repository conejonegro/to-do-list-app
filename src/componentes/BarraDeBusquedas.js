import React, { useState } from 'react';
import '../css/search-bar.css';

function BarraDeBusqueda( {estadoDeBarra, actualizarEstadoDeBarra} ){
    
    function buscandoTarea(event){

       console.log(event)
       actualizarEstadoDeBarra(event.target.value);

    }

    return(

        <React.Fragment>

            <input 
            placeholder='Buscar Tareas'
            value = { estadoDeBarra }
            onChange={ buscandoTarea }
            />

            <p>{ estadoDeBarra }</p>

        </React.Fragment>

    )

}

export default BarraDeBusqueda;