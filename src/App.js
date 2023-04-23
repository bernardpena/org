import { useState } from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario/Formulario.js';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';
import Footer from './Componentes/Footer';
import { v4 as uuid} from "uuid"


//El useState debe usarse dentro de un Componente o una 
// funcion de un Componente!!! y antes del RETURN!!

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo:"Grupo 1",
      foto: "https://www.github.com/bernardpena.png",
      nombre:"Hans Yufla M.",
      puesto:"Jefe de Turno",
      fav: false
    },
    {
      id: uuid(),
    equipo:"Grupo 1",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Juan Campos A.",
    puesto:"Monitor Senior",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Grupo 1",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Fernando Gallardo.",
    puesto:"Operador SX",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Grupo 1",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Bernardo Peña P.",
    puesto:"Operador SX",
    fav: true
  },
  {
    id: uuid(),
    equipo:"Grupo 1",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Mauricio Fredes",
    puesto:"Operador Tank-Farm",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Grupo 1",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Boris Alvear",
    puesto:"Operador Tank-Farm",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Grupo 2",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Jose Escobar",
    puesto:"Jefe de Turno",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Grupo 2",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Luis Barraza",
    puesto:"Monitor Senior",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Grupo 2",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Manuel Sandoval",
    puesto:"Operador SX",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Grupo 2",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Hans Contreras",
    puesto:"Operador SX",
    fav: false,
  },
  {
    id: uuid(),
    equipo:"Grupo 2",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Mario xxxx",
    puesto:"Operador Tank-Farm",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Grupo 2",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Guaton de la fruta",
    puesto:"Operador Tank-Farm",
    fav: false
  }
])

const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Lider SX",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Grupo 1",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Grupo 2",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Grupo 3",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"Grupo 4",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    }
])



  // !Ternario --> condicion ? seMuestra : noSeMuestra
  // Cortocircuito --> condicion && seMuestra

  const cambiarMostrar = () =>{
      actualizarMostrar(!mostrarFormulario)
  } 

  //Registrar Colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo Colaborador", colaborador)
    //spread operater
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //eliminar Colaborador
  const eliminarColaborador = (id) =>{
    console.log("eliminar Colaborador", id)
    const nuevosColaboradores =colaboradores.filter((colaborador) => colaborador.id !==id )
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de Equipos
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id )
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    } )
    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }

  const like =(id) =>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div >
      <Header />
      {/*mostrarFormulario === true ? <formulario /> : <></> */}
      {mostrarFormulario && < Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador = {registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar ={cambiarMostrar} />

     {
      equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores = {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        like = {like}
        /> )
     }

     <Footer />

    </div>
  );
}


export default App;
