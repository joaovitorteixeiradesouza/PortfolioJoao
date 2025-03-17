import './style.scss';
import HtmlIcon from '../../assets/Html.png';
import ArduinoIcon from '../../assets/Arduino_Logo.svg';
import JavaIcon from '../../assets/Icone_Java.webp';
import CIcone from '../../assets/Icone_C.jfif';
import VBIcone from '../../assets/Icone_VB.png';
import CssIcon from '../../assets/Css.png';
import JavascriptIcon from '../../assets/Javascript_Em_Uso.png';
import ReactIcon from '../../assets/React.png';

function MyTech() {
    return (
        <div className="my-tech">
            <h2 className="sub-title">Minhas <span>Techs</span></h2>
            <div className="tech-container">
                <p>Tecnologias</p>

                <h3 className='sub-title'>
                    Já <span>utilizadas</span>
                </h3>

                <div className="tech-icons">
                    <ul>
                        <li>
                            <img src={ArduinoIcon} />
                        </li>
                        <li>
                            <img src={JavaIcon} />
                        </li>
                        <li>
                            <img src={CIcone} />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tech-container">
                <p>Tecnologias</p>

                <h3 className='sub-title'>
                    Atualmente <span>Desenvolvendo</span>
                </h3>

                <div className="tech-icons">
                    <ul>
                        <li>
                            <img src={HtmlIcon} />
                        </li>
                        <li>
                            <img src={CssIcon} />
                        </li>
                        <li>
                            <img src={JavascriptIcon} />
                        </li>
                        <li>
                            <img src={VBIcone} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyTech;