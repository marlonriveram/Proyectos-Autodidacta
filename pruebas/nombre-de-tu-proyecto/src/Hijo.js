function Hijo ({count,incrementar}) {
    return (
        <div>
           <p>contador : {count}</p>
           <button
            onClick={() => incrementar()}
           >Incrementar</button>
        </div>
    )
}

export {Hijo}