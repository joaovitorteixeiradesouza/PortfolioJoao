import IconLogo from '../../assets/Icon_logo.png'
import ImgHero from '../../assets/Hero_right.png'
import GitIcon from '../../assets/Git.png'
import LkIcon from '../../assets/Linkedin.png'
import InstIcon from '../../assets/Instagram.png'
import Skills from '../Skills'
import MyTech from '../MyTech'
import Portfolio from '../Portfolio'
import ExperienciaProfissional from '../ExperienciaProfissional'
import Contato from '../Contato'
import Rodape from '../../Components/Rodape'
import './style.scss'
import MobileNavBar from '../../utils/hellpers'
import { useEffect, useState } from 'react';

function Home() {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        // Aguarda o carregamento completo da página para garantir os elementos no DOM
        const handleLoad = () => {
            const mobileNav = new MobileNavBar(".mobile-menu", "#menu", "#menu a");
            mobileNav.init();
            setMenu(mobileNav);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <div className='container'>
            <div className="home">
                <header>
                    <div id="logo-header">
                        <a href='#'>
                            <img src={IconLogo}></img>
                            <h2>João Vitor</h2>
                        </a>
                    </div>
                    <div className='mobile-menu'>
                            <div className='line1'></div>
                            <div className='line2'></div>
                            <div className='line3'></div>
                    </div>
                    <nav id='menu'>
                        <a href="#">Home</a>
                        <a href="#Sobre">Sobre</a>
                        <a href="#Portfolio">PortFólio</a>
                        <a href="#Skills">Serviços</a>
                        <a href="#Resumo">Resumo</a>
                        <a href="#Contato">Contato</a>
                    </nav>
                </header>
                <section className="hero">
                    <div className="text-hero">
                        <div className="text-container">
                            <p>Olá pessoal,</p>
                            <h2>
                                EU SOU UM<br/>
                                DESENVOLVEDOR
                            </h2>
                            <p>Seja bem-vindo ao meu portifólio website</p>
                        </div>
                        <a href='#Sobre'><button>Saiba mais sobre mim</button></a>
                        <div className="social-media">
                            <a href="https://github.com/joaovitorteixeiradesouza" target='_blank'><img src={GitIcon} /></a>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-teixeira-de-souza-b85bb417b/" target='_blank'><img src={LkIcon} /></a>
                            <a href="https://www.instagram.com/joao_vitor_t._souza/" target='_blank'><img src={InstIcon} /></a>    
                        </div>       
                    </div>
                    <div className="img-hero">
                        <img src={ImgHero} />
                    </div>
                </section>
                <section id='Sobre'>
                    <Skills></Skills>
                </section>
                <section id='Portfolio'>
                    <Portfolio></Portfolio>
                </section>
                <section id='Skills'>
                    <MyTech></MyTech>
                </section>
                <section id='Resumo'>
                    <ExperienciaProfissional></ExperienciaProfissional>
                </section>
                <section id='Contato'>
                    <Contato></Contato>
                </section>
            </div>
            <Rodape></Rodape>
        </div>
    )
}

export default Home;