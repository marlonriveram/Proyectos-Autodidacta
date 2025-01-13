import './Descuentos.css'
function Descuentos (props) {
    return (
        <div onClick={props.descuentoSelect} className={`container-valor-descuento ${props.select && "descuento-select"} `}>
            <p className="valor-descuento">{props.porcentaje}%</p>
        </div>
    );
}

export {Descuentos};