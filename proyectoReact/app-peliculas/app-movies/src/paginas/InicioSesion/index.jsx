import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function InicioSesion () {

    const [estado,setEstado] = useState(false)
    const [token,setToken] = useState('')
    const navigate = useNavigate();


    
   
        
    return(
       <>
        <button className='bg-white'
            onClick={()=>setEstado(item => !item)}
        >iniciar  sesion </button>

        <a href={`https://www.themoviedb.org/authenticate/${token?.request_token}?redirect_to=http://127.0.0.1:5173/#/`} target="_self" rel="noopener noreferrer">
        Ir a la página externa
      </a>
       </>
    )
};

export {InicioSesion}