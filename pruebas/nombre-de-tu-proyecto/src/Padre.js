

function Padre ({render,children}) {
    return (
        <div>
            {render()}
            {children}
        </div>
       
    )
}

export {Padre}