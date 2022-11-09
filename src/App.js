import React from "react";
import AppUI from "./componentes/AppUI";
import './css/App.css';
import './css/boton-agregar.css';
import './css/tareas-por-completar.css';

const arregloTareas = [
  { id: 1, titulo: "Comprar leche", completada: false },
  { id: 2, titulo: "Estudiar React", completada: true },
  { id: 3, titulo: "Lavar platos", completada: false },
  { id: 4, titulo: "Hacer ejercicio", completada: true }
]

// AQUI RENDERIZAMOS TODOS NUESTROS COMPONENTES
function App(props) {

// DEFINIR USE STATE
  const [tareas, actualizarEstadoTareas] =  React.useState(arregloTareas);
  const [estadoDeBarra, actualizarEstadoDeBarra] = React.useState(" ");

// Al estado tareas se le hace un filtro para guardar en un arreglo solo las tareas completadas true
  const arregloTareasCompletadas = tareas.filter( (tarea) => { return tarea.completada == true }  )
  const tareasTotales = tareas.length;
  const tareasCompletadas = arregloTareasCompletadas.length;

// FUNCIONAMIENTO DE LA BARRA DE BUSQUEDA
  let tareasEncontradas = []; // aqui se guarda el nuevo arreglo de las tareas que coinciden con lo que estas escribiendo

  if( estadoDeBarra.length >= 1 ){
    tareasEncontradas = tareas.filter( (tarea) => { 

      const tituloEnMinusculas = tarea.titulo.toLowerCase();
      const inputEnMinusculas = estadoDeBarra.toLowerCase();

      return tituloEnMinusculas.includes(inputEnMinusculas)

    })
  } 
  else{
    tareasEncontradas = tareas;
  }

// FUNCION PARA MARCAR TAREAS COMO COMPLETADAS
const completarTarea = (titulo) => { 

 const indexTarea = tareas.findIndex( (tarea) =>  {
  return (tarea.titulo === titulo)  // buscamos ydevolvemos el indice de cada tarea cuando se hace click en una tarea
 })

    const nuevasTareas = [...tareas]; // para actualizar el estado tenemos que creas un nuevo arreglo para luego actualizarlo
    nuevasTareas[indexTarea].completada = true; 
    actualizarEstadoTareas(nuevasTareas); // actualizamos el estado para que se re renderice el componente

 console.log(tareas)
}
// FUNCION PARA BORRAR TAREAS 
const borrarTarea = (titulo) => { 

 const indexTarea = tareas.findIndex( (tarea) =>  {
  return (tarea.titulo === titulo)  // buscamos ydevolvemos el indice de cada tarea cuando se hace click en una tarea
 })

    const nuevasTareas = [...tareas]; // para actualizar el estado tenemos que creas un nuevo arreglo para luego actualizarlo
    nuevasTareas.splice(indexTarea, 1)
    actualizarEstadoTareas(nuevasTareas); // actualizamos el estado para que se re renderice el componente

 console.log(tareas)
}

 
// RENDERIZACION DE COMPONENTES
  return (

    <AppUI 
    tareasCompletadas = { tareasCompletadas }
    tareasTotales = { tareasTotales }
    estadoDeBarra = { estadoDeBarra }
    actualizarEstadoDeBarra = { actualizarEstadoDeBarra }
    tareasEncontradas = { tareasEncontradas }
    completarTarea = { completarTarea }
    borrarTarea = { borrarTarea }
    tituloTarea= {tareas.titulo}
    />

  );
}

export default App;
