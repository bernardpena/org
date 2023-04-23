import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../LIstaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {
    //evento = event - e, trabajar con form va asociado a preventDefault

    const [ nombre, actualizarNombre] = useState("")
    const [ puesto, actualizarPuesto] = useState("")
    const [ foto, actualizarFoto] = useState("")
    const [ equipo, actualizarEquipo] = useState("")

    const[titulo, actualizarTitulo] = useState("")
    const[color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log("manejar el Envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        
        registrarColaborador(datosAEnviar)
        console.log(datosAEnviar)
    }

    const manejarNuevoEquipo =(e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }



    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required  
                    valor={nombre} 
                    actualizarValor={actualizarNombre}
            />

            <Campo
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" 
                    required 
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}
            />

            <Campo
                    titulo="Foto" 
                    placeholder="Ingresar enlace de foto" 
                    required 
                    valor={foto} 
                    actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
            valor={equipo} 
            actualizarEquipo={actualizarEquipo} 
            equipos={props.equipos}
            />

            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <Campo 
                    titulo="Titulo" 
                    placeholder="Ingresar Titulo" 
                    required  
                    valor={titulo} 
                    actualizarValor={actualizarTitulo}
            />

            <Campo 
                    titulo="Color" 
                    placeholder="Ingresar el Color en Hex" 
                    required 
                    valor={color} 
                    actualizarValor={actualizarColor}
                    type="color"
            />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario