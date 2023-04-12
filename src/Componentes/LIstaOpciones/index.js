import "./ListaOpciones.css"

const ListaOpciones = (props)=>{

        //Metodo map -> arreglo.map( (equipo, index) =>{
        // return <option></option>

        //})
    const equipos = [
        "Grupo 1",
        "Grupo 2",
        "Grupo 3",
        "Grupo 4"
    ]

    const manejarCambio = (e) =>{
        props.actualizarEquipo(e.target.value)
    }


    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio} >
            <option value="" disabled defaultValue="" hidden>Seleccione Equipo</option>
            { equipos.map((equipo, index) => <option key={index} value={equipo} >{equipo}</option>
            )}
        </select>
    </div>
}

export default ListaOpciones;
