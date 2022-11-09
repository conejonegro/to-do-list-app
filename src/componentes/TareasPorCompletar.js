import React from 'react';

function TareasPorCompletar(props){
    return(

        <section>
            <h3>Tareas Por Completar</h3>
            <ul>
                {props.children}
            </ul>
        </section>

    )
}

export default TareasPorCompletar;