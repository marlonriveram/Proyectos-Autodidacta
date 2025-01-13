import { useState } from 'react';
import './buscador.css'
import { useNavigate } from 'react-router-dom';
const Buscador = () =>{
    const [value,setValue] = useState('');
    const navigate = useNavigate();

    const searchMovie = (event) =>{
        event.preventDefault();
        if(value != ''){
            navigate(`/search/${value}`);
        }
    }
    
  
    return(
        <form className='buscador'
            onSubmit={searchMovie}
        >
            <input type="text" placeholder="Bucar Peliculas"
            value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button>🔍</button>
        </form>
        
    )
};

export { Buscador }