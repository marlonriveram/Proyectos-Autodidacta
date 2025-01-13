import { useContext, useEffect, useRef, useState } from "react";
import { Cards } from "../../Componentes/Cards";
import { providerContex } from "../../Componentes/Contexto/Contexto";
import { urlApi } from "../../urlApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { AllMovies } from "../../Componentes/AllMovies";
import { Loading } from "../../Componentes/Loading";
import { AllMoviesSkeleton } from "../../Componentes/LoadingSqueleton";
import { ButtonRows } from "../../Componentes/ButtonRows";
import './genres.css'

const Genres = () =>{
    const {state} = useLocation();
    const navigate = useNavigate()
    const [page,setPage] = useState(1);
    const latsItem = useRef();
    const {
        getImageUrlFormat,
    } = useContext(providerContex);

    const urlMovies = urlApi.Genres.moviesByGenre(page,state);
    const {data:movies,loading} = useFetch(urlMovies,'movies',page);

    const urlFormatImagen = urlApi.ImageFormat;
    const urlImages = getImageUrlFormat(urlFormatImagen,'poster','780');

    const inicio = () =>{
        window.scrollTo(0, 0);
    }
    inicio();
    
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

    const goBack = () =>{
        navigate(-1);
    }
    
    return(
        <section className='container-movies-by-genres'>
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
                        />
                    ))} 
                />
            }
            {(loading && movies.length > 0 ) && <Loading/>}
        </section>

    )
};

export { Genres }

