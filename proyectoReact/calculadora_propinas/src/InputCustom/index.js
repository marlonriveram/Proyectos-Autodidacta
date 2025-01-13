import './Custom.css'
function Custom ({ocultarDecuentos,costumDescut,setCostumDescut}){
    return(
        <input  onClick={ocultarDecuentos} 
        value={costumDescut}
        onChange={(event) => {
            setCostumDescut(event.target.value)
        }}
        type="number" placeholder="CUSTOM" className="input-custom"/>
    );

}

export {Custom}