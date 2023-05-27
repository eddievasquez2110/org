
import "./MiOrg.css";

const MiOrg = (props) => {

    return <section className="orgSection">
        <h3 className="title">ORGANIZACION</h3>
        <img src="/img/add.png" alt="ocultar / mostrar" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg;