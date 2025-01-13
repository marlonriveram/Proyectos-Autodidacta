import { forwardRef,useState } from "react"
import { useUrlImagen } from "../../Hooks/UrlImagen";
import { useNavigate } from "react-router-dom";
import { useWidthWindow } from "../../Hooks/WidthWindow";
import './cardAllMovies.css'

const CardAllMovies = forwardRef ((prop,ref)=> {
    const [isHover,setIsHover] = useState(false)
    const navigate = useNavigate();
    const {isMobile} = useWidthWindow();

    
    
    
    const urlImagen = useUrlImagen();
    const images = `${urlImagen?.secure_base_url}${urlImagen?.backdrop_sizes[1]}${prop.movie?.backdrop_path}`;
    
    const detailView = () =>{
        navigate(`/detail-View/${prop.movie.name || prop.movie.title}`,{ state: prop.dataMovie  })
    }

    return(
        <div 
            className='container-card-all-movies'
            onMouseEnter={()=> setIsHover(true)} // Evento para detectar cundo el mouse esta sobre la card
            onMouseLeave={()=>setIsHover(false)} // Evento para detectar cundo el mouse no esta sobre la card
            onClick={detailView}
        >
           <figure 
                className='container-img'
                ref={ref}
           >

           <img className=' img-all-movie'
           src={images} alt="poster-pelicula" 
           />

            { <div className='container-overview  text-slate-300 '>
                {(isHover && !isMobile) && prop.movie.overview}
                </div>}
           </figure>
            <p className='title-movie'>{prop.movie.title ||prop.movie.name}</p>
        </div>
    )
}) 

export {CardAllMovies}