import { useState } from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario/Formulario.js';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';

//El useState debe usarse dentro de un Componente o una 
// funcion de un Componente!!! y antes del RETURN!!

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  // !Ternario --> condicion ? seMuestra : noSeMuestra
  // Cortocircuito --> condicion && seMuestra

  const cambiarMostrar = () =>{
      actualizarMostrar(!mostrarFormulario)
  } 

  //lista de equipos
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
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    }
  ]

  return (
    <div >
      <Header />
      {/* mostrarFormulario === true ? <Formulario /> : <></> */}
      {mostrarFormulario && <formulario />}
      <MiOrg cambiarMostrar ={cambiarMostrar} />
      
      {
        equipos.map( (equipos) => {
          console.log("Equipo: ", equipos)
          return <Equipo datos={equipos}/>
        })
      }


    </div>
  );
}

export default App;
