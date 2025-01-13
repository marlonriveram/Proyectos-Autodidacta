import { Link } from 'react-router-dom';
import './genero.css'
const Genero = ({idGenero,genero}) =>{
  return(    
    <Link className="genre" to={`/genres/${genero}`} state={{idGenero:idGenero}}>
      <div > 
        <p>{genero}</p>
        </div>
    </Link>
  )
};

export { Genero }