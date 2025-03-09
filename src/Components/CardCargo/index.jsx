import './CardCargo.scss';

function CardCargo({titleCargo, descCargo}) {
    return (
        <div className="card-cargo">
            <h2>{titleCargo}</h2>
            <p>{descCargo}</p>
        </div>
    )
}

export default CardCargo;