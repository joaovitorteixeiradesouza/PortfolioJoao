import './style.scss';
import GitIcon from '../../assets/Git.png';
import LkIcon from '../../assets/Linkedin.png';
import InstIcon from '../../assets/Instagram.png';
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Contato() {
    return (
        <div className="contato-container">
            <h1>Meus Contatos</h1>
            <h2>Telefone:</h2>
            <p><a href='https://wa.me/qr/HQYIYQXLE7WLP1' target='_blank'><span><FaWhatsapp></FaWhatsapp></span>(11) 93952-9285</a></p>
            <h2>E-mail:</h2>
            <p><a href='mailto:joaovitorteixeiradesouza4@gmail.com' target='_blank'><span><BiLogoGmail></BiLogoGmail></span>joaovitorteixeiradesouza4@gmail.com</a></p>
            <h2>Redes Sociais:</h2>
            <div className='icons'>
                <a href="https://github.com/joaovitorteixeiradesouza" target='_blank'><img src={GitIcon} /></a>
                                            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-teixeira-de-souza-b85bb417b/" target='_blank'><img src={LkIcon} /></a>
                                            <a href="https://www.instagram.com/joao_vitor_t._souza/" target='_blank'><img src={InstIcon} /></a>   
            </div>
        </div>
    )
}

export default Contato;

