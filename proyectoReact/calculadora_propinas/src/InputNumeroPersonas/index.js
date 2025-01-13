import './NumeroPersonas.css'
function NumeroPersonas (props) {
    return (
        <div className="container-input-personas">
        <label > Numero de Personas </label>
        <input 
        value={props.numPersonas}
        onChange={(event) =>{
            props.setNumPersonas (event.target.value)
        }}
        type="number" placeholder="0" className="num-Personas"/>
    </div>
    );
}

export {NumeroPersonas};