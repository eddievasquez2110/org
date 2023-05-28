import "./Footer.css"
import {VscGithub} from "react-icons/vsc"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
            <a href='https://github.com/eddievasquez2110'> 
                <VscGithub className="icon"/>
            </a>
            <a href='#'> 
                <img src="/img/twitter.png" alt="twitter" />
            </a>
            <a href='#'> 
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' /> 
        <strong>Desarrollado por Edd</strong>
    </footer>
}

export default Footer