import { useEffect, useRef, useState } from "react";
import { useApiPelicula } from "../../Hooks/ApiPeliculas";
import { CardAllMovies } from "../../Componentes/CardAllMovies"
import { useParams } from "react-router-dom";
import { urls} from "../../dataMovies";
import './allMovies.css'


function AllMovies () {
    // states
    const [page,setPage] = useState(1);
    // refs
    const lastItem = useRef(null);
    // params
    const {slug} = useParams();
    //-------------------------------------------


    const urlMovie = urls.movieCategory.find(dataMovie => dataMovie.slug === slug);
    const urlTvSerie = urls.tvSeriesCategory.find(dataMovie => dataMovie.slug === slug);
    let endpointCategory;
    let url='';

    if(urlMovie){
        endpointCategory= urlMovie.slug;
        url = `https://api.themoviedb.org/3/movie/${endpointCategory}?language=en-US&page=${page}`
    }else if(urlTvSerie){
        endpointCategory= urlTvSerie.slug;
        url = `https://api.themoviedb.org/3/tv/${endpointCategory}?language=en-US&page=${page}`
    }
   
    const {dataMovie} = useApiPelicula(url,page)
    // observar el ultimo elemento de datamovie

   
  
    useEffect(()=>{  // quitarr de aquí a futuro

        console.log(lastItem.current)
        if(page === 4) return
            const observer = new IntersectionObserver((entries,observador)=>{
            if(entries[0].isIntersecting){
            setPage(item => item+1)
            }
        },{
            rootMargin: '0px',
            threshold:0.75
        })

        if(lastItem.current && observer ) observer.observe(lastItem.current);

        return () =>{
            if(observer) observer.disconnect()
        }

    })

    return(
        <>
            <div className='container-all-movies'>
                {    dataMovie?.map((movie,index)=>(
                   <CardAllMovies 
                   key={movie.id}
                   movie={movie}
                   ref={lastItem}
                   dataMovie={dataMovie}
                   />))}
            </div>
           
        </>
    )
};

export{AllMovies}