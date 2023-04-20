import { useState } from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario/Formulario.js';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';
import Footer from './Componentes/Footer';


//El useState debe usarse dentro de un Componente o una 
// funcion de un Componente!!! y antes del RETURN!!

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo:"Grupo 1",
      foto: "https://www.github.com/bernardpena.png",
      nombre:"Hans Yufla M.",
      puesto:"Jefe de Turno"
    },
    {
    equipo:"Grupo 1",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Juan Campos A.",
    puesto:"Monitor Senior"
  },
  {
    equipo:"Grupo 1",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Fernando Gallardo.",
    puesto:"Operador SX"
  },
  {
    equipo:"Grupo 1",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Bernardo Peña P.",
    puesto:"Operador SX"
  },
  {
    equipo:"Grupo 1",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Mauricio Fredes",
    puesto:"Operador Tank-Farm"
  },
  {
    equipo:"Grupo 1",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Boris Alvear",
    puesto:"Operador Tank-Farm"
  },{
    equipo:"Grupo 2",
    foto: "https://www.github.com/bernardpena.png",
    nombre:"Jose Escobar",
    puesto:"Jefe de Turno"
  },
  {
  equipo:"Grupo 2",
  foto: "https://www.github.com/bernardpena.png",
  nombre:"Luis XXXXX",
  puesto:"Monitor Senior"
},
{
  equipo:"Grupo 2",
  foto: "https://www.github.com/bernardpena.png",
  nombre:"Manuel Sandoval",
  puesto:"Operador SX"
},
{
  equipo:"Grupo 2",
  foto: "https://www.github.com/bernardpena.png",
  nombre:"Hans Contreras",
  puesto:"Operador SX"
},
{
  equipo:"Grupo 2",
  foto: "https://www.github.com/bernardpena.png",
  nombre:"Mario xxxx",
  puesto:"Operador Tank-Farm"
},
{
  equipo:"Grupo 2",
  foto: "https://www.github.com/bernardpena.png",
  nombre:"Guaton de la fruta",
  puesto:"Operador Tank-Farm"
}])

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



  // lista de Equipos
  const equipos = [
    {
      titulo:"Lider SX",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      titulo:"Grupo 1",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      titulo:"Grupo 2",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      titulo:"Grupo 3",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      titulo:"Grupo 4",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    }
]

  return (
    <div >
      <Header />
      {/*mostrarFormulario === true ? <formulario /> : <></> */}
      {mostrarFormulario && < Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador = {registrarColaborador}
        />
      }

      <MiOrg cambiarMostrar ={cambiarMostrar} />
     
     {
      equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores = {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
        /> )
     }

     <Footer />

    </div>
  );
}


export default App;
