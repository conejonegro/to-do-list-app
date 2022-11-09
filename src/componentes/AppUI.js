import React from 'react';
import ContadorTareas from "./ContadorTareas";
import TareasPorCompletar  from "./TareasPorCompletar"; 
import TareaItem from "./TareaItem";
import BotonCrearTarea  from './BotonCrearTarea';
import BarraDeBusqueda from './BarraDeBusquedas';

function AppUI({
    tareas,
    tareasCompletadas,
    tareasTotales,
    estadoDeBarra,
    actualizarEstadoDeBarra,
    completarTarea,
    borrarTarea,
    tareasEncontradas,
    tituloTarea
}){

    return(

        <React.Fragment>

      <h1>App de Tareas</h1>

      <ContadorTareas
        tareasCompletadas = { tareasCompletadas }
        tareasTotales = { tareasTotales }
      />

      <BarraDeBusqueda  
        estadoDeBarra = { estadoDeBarra }
        actualizarEstadoDeBarra = { actualizarEstadoDeBarra }
      />

      <TareasPorCompletar>
        {
        
          tareasEncontradas.map( tarea =>  (
            <TareaItem 
              key = {tarea.id} 
              tituloTarea = {tarea.titulo} 
              status = {tarea.completada} 
              tareas = { tareas }
              completarTarea = { () => completarTarea(tarea.titulo) }
              borrarTarea = { () => borrarTarea(tarea.titulo)}
            />
          ))
        
        }
      </ TareasPorCompletar>

      {/* <BotonCrearTarea tituloTarea = {tareas.titulo} /> */}
     
    </React.Fragment>

    )

}

export default AppUI;