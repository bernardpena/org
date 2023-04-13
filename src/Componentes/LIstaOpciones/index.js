import "./ListaOpciones.css"

const ListaOpciones = (props)=>{

        //Metodo map -> arreglo.map( (equipo, index) =>{
        // return <option></option>

        //})
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
