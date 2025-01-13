import './Bill.css'
function Bill ({totalCuenta,setTotalCuenta}) {

    return (
    
        <div className="container-input-costo">
            <label > Bill</label>
            <input 
            value={totalCuenta}
            onChange={(event) =>{
                setTotalCuenta(event.target.value);
            }}
            type="number" placeholder="$" className="costo"/>
        </div>
    );
};

export {Bill};