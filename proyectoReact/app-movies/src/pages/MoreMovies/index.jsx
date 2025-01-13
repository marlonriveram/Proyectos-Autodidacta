import { useContext, useEffect, useRef, useState } from "react";
import { Cards } from "../../Componentes/Cards";
import { urlApi} from "../../urlApi";
import { providerContex } from "../../Componentes/Contexto/Contexto";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { ButtonRows } from "../../Componentes/ButtonRows";
import './moreMovies.css'
import { AllMovies } from "../../Componentes/AllMovies";
import { AllMoviesSkeleton } from "../../Componentes/LoadingSqueleton";
import { Loading } from "../../Componentes/Loading";


const MoreMovies = () =>{
    const navigate = useNavigate();
    const [page,setPage] = useState(1);
    const latsItem = useRef();
    const {slug} = useParams();
    const {
        getImageUrlFormat,
    } = useContext(providerContex);

    const category = urlApi.movies.find(category => category.slug === slug);

    const urlMovies = category.url(page);
    // const {dataMovie} = useApiMovies(urlMovies,page); se reemplazo por data:movies
    const {data:movies,loading} = useFetch(urlMovies,'movies',page);

    console.log('cargando',loading,'numero peluculas',!!movies.length)
    const urlFormatImagen = urlApi.ImageFormat;
    const urlImages = getImageUrlFormat(urlFormatImagen,'poster','780');
    const goBack = () =>{
        navigate(-1);
    }

    useEffect(() => { //Observador para paginacion
        
        const observador = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting === true){
                if(page >=4) return
                setPage(prev =>prev+=1 );
            }
        },{
            rootMargin:'0px',
            threshold:0.75,
        });

        if(latsItem.current) observador.observe(latsItem.current);
        return () =>{
            if(observador) observador.disconnect()
        }
    },[movies])
    
    return(
      <div className='container-more-movies'>
          <div className="bottom-back">
            <ButtonRows direcction={'rowLeft'} position={'bottom'} color={'white'} handle={goBack}/>
          </div>

          {(loading && movies.length === 0) && <AllMoviesSkeleton/>}

          {(!loading || movies.length > 0 ) &&
            <AllMovies 
                movies={movies}
                render={((movie)=>(
                <Cards 
                key={movie.id}
                poster_path={`${urlImages}${movie.poster_path}`}
                overview={movie.overview}
                title={movie.title}
                ref={latsItem}
                data={movie}
                redirect={'movie-detail'}
                // buttonFavorite={<ButtonFavorite movies={dataMovie} movieId={movie.id}/>}
                />
            ))}
          />
          }

          {(loading && movies.length > 0 ) && <Loading/>}
    
      </div>
    )
};

export { MoreMovies }