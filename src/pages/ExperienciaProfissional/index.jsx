import CardCargo from '../../Components/CardCargo';
import aspas from '../../assets/right-quote 1.png';
import { experienciaDevList } from '../../utils/hellpers';
import './style.scss';

function ExperienciaProfissional() {
    return (
        <div className="experiencia-profissional">
            <div className="text-title-experiencia">
                <p>
                    Minha jornada está apenas
                    <br/>
                    começando, sempre aprendendo
                </p>
                <h2 className='sub-title'>
                    Experiência <br/>
                    <span>Profissional</span>
                </h2>
            </div>
            <div className='cargo-container'>
                {
                    experienciaDevList().map((item, index) => (
                        <CardCargo key={index}
                        titleCargo={item.titleCargo}
                         descCargo={item.descCargo}/>
                    ))
                }
            </div>
            <div className='frase-experiencia'>
                <img src={aspas}/>
                <p>"Renda-se como eu me rendi.<br/>
                Mergulhe no que você não conhece como eu mergulhei.<br/>
                Não se preocupe em entender.<br/>
                Viver ultrapassa qualquer entendimento."</p>
                <h2>~Clarice Lispector</h2>
            </div>
        </div>
    )
}

export default ExperienciaProfissional;