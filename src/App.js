import { useState } from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario/Formulario.js';
import MiOrg from './Componentes/MiOrg';
//El useState debe usarse dentro de un Componente o una 
// funcion de un Componente!!! y antes del RETURN!!

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  // !Ternario --> condicion ? seMuestra : noSeMuestra
  // Cortocircuito --> condicion && seMuestra

  const cambiarMostrar = () =>{
      actualizarMostrar(!mostrarFormulario)
  } 
  return (
    <div >
      <Header />
      { mostrarFormulario === true ? <Formulario /> : <></> }
  
      <MiOrg cambiarMostrar ={cambiarMostrar} />
    </div>
  );
}

export default App;
