import { createContext} from "react";
import { useState } from "react";
import { urls } from "../../dataMovies";
const Context = createContext();

function Provider (prop){
    const [isOpenAside,setIsOpenAside] = useState(false);
    const [loading,setLoading] = useState(false);

    
    // desplazar el carousel a la izquierda
    const moveLeft = (containerCarouselRef,containerCarouselWidth) =>{
        if (containerCarouselRef.current) {
            containerCarouselRef.current.scrollLeft -= containerCarouselWidth; // se desplaza a la izq el tamaño que tenga el conatainer del carousel
        }
    }
    // desplazar el carousel a la derecha
    const moveRight = (containerCarouselRef,containerCarouselWidth) =>{
        if (containerCarouselRef.current) {
            containerCarouselRef.current.scrollLeft += containerCarouselWidth; // se desplaza a la der el tamaño que tenga el conatainer del carou
        }
    }

    
    const selectCategoryUrl = (slug,page)=>{
        
        const urlMovie = urls.movieCategory.find(dataMovie => dataMovie.slug === slug);
        const urlTvSerie = urls.tvSeriesCategory.find(dataMovie => dataMovie.slug === slug);
        let endpointCategory;
        let url='';
        
        if(urlMovie){
            endpointCategory= urlMovie.slug;
           return url = `https://api.themoviedb.org/3/movie/${endpointCategory}?language=en-US&page=${page}`
        }else if(urlTvSerie){
            endpointCategory= urlTvSerie.slug;
           return url = `https://api.themoviedb.org/3/tv/${endpointCategory}?language=en-US&page=${page}`
        }
    }

    return(
    <Context.Provider
        value={{
            isOpenAside,
            setIsOpenAside,
            loading,
            setLoading,
            moveLeft,
            moveRight,
            selectCategoryUrl,
        }}
    >
        {prop.children}
    </Context.Provider>
    )
};



export {Context,Provider}