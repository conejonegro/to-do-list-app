import React from "react";

function ContadorTareas( {tareasCompletadas, tareasTotales} ) {
    return (

        <h2>{`Has completado ${ tareasCompletadas } tareas, de ${ tareasTotales } tareas totales`}</h2>
    )
    
}

export default ContadorTareas;