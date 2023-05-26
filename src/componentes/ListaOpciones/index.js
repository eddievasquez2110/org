import "./ListaOpciones.css";

const ListaOpciones = () => {
    
    const opciones = [
        "Programacion",
        "UI",
        "UIX",
        "FrontEnd",
        "Backend",
        "Movil"
    ]
    
    return <div className="lista-opciones">

        <label>Equipos</label>
        <select>
            {
                opciones.map((equipo, index) => {
                    return <option key={index}>{equipo}</option>
                })
            }
        </select>
    </div>
};

export default ListaOpciones;