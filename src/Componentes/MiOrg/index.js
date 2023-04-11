import { useState } from "react";
import "./MiOrg.css";
const MiOrg = (props) =>{
    //Estado - hooks= funcionalidades que ayudan a trabajar con el comportamiento de React
    //useState() = utiliza el estado
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true);

    // const manejarClick = ()=>{
    //     console.log("Mostrar Elemento", !mostrar);
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="agregar" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;
