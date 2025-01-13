import './Resultados.css'
function Resultados ({reset,totalDescuento,totalPagarPersona}) {
    return (
        <div className="container-resultados">
           <div className="sub-cotainer-resultados" >
                <div className="tip amount">tip amount</div>
                <div className='container-descuento'>
                    <span>$</span>
                    <span className='descuento'>{totalDescuento}</span>
                </div>
            </div>
            <div className="sub-cotainer-resultados">
            <div className="total">total</div>
                <div className='containe-total-persona'>
                <span>$</span>
                <span className='total-persona'>{totalPagarPersona}</span>
                </div>
            </div>
            <div className="container-btn">
            <button 
            onClick={reset}
            className="btn-reset">RESET</button>
            </div>
            
    </div>
    );
}


export {Resultados}