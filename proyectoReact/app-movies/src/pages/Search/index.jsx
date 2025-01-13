import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { urlApi } from "../../urlApi";
import { useContext, useEffect, useRef, useState } from "react";
import { AllMovies } from "../../Componentes/AllMovies";
import { Cards } from "../../Componentes/Cards";
import { providerContex } from "../../Componentes/Contexto/Contexto";
import { AllMoviesSkeleton } from "../../Componentes/LoadingSqueleton";
import { ButtonRows } from "../../Componentes/ButtonRows";

const Search = () =>{
    const {name} = useParams();
    const [page,setPage] = useState(1);
    const latsItem = useRef();
    const navigate = useNavigate();
    const urlSearch = urlApi.search(name)
    const {data:wantedMovies,loading} = useFetch(urlSearch,'movies',page);
    const {
        getImageUrlFormat,
    } = useContext(providerContex);

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
    },[wantedMovies])

    const urlFormatImagen = urlApi.ImageFormat;
    const urlImages = getImageUrlFormat(urlFormatImagen,'poster','780');

    
    const goBack = () =>{
        navigate(-1);
    }

    return(
        <section className="searches">
            <div className="bottom-back">
                <ButtonRows direcction={'rowLeft'} position={'bottom'} color={'white'} handle={goBack}/>
            </div>
                {(loading && wantedMovies.length === 0) && <AllMoviesSkeleton/>}

                {(!loading || wantedMovies.length > 0 ) &&
                      <AllMovies 
                      movies={wantedMovies}
                      render={((movie)=>(
                          ((movie.poster_path ) && 
                          <Cards 
                              key={movie.id}
                              poster_path={`${urlImages}${movie.poster_path}`}
                              overview={movie.overview}
                              title={movie.title}
                              ref={latsItem}
                              data={movie}
                              redirect={'movie-detail'}
                          />)
                      ))} 
                  />
                }
        </section>
    )
};

export { Search }