import './style.scss';
import HtmlIcon from '../../assets/Html.png';
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
                            <img src={HtmlIcon} />
                        </li>
                        <li>
                            <img src={CssIcon} />
                        </li>
                        <li>
                            <img src={JavascriptIcon} />
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
                            <img src={ReactIcon} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyTech;