import { createContext, useState } from "react";
import { useApiMovies } from "../../Hooks/useApiMovies";
import { useFormatImg } from "../../Hooks/useFormatImg";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { useGenres } from "../../Hooks/useGenres";
import { useFetch } from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const providerContex = createContext();
const Contexto = ({children}) =>{
    const [favoriteMovies,setFavoriteMovies] = useLocalStorage('favorites',[]);
    const getMovies = (url) =>{  // se reemplazo por getFetch
        const {dataMovie} = useApiMovies(url);
        return dataMovie;
    };

    const getImageUrlFormat = (url,type,size='original') =>{  // se planea reemplazar por getFetch
        const {dataImg} = useFormatImg(url);
   
        switch (type){
            case 'poster':
                let resolutionP = {
                        '92':0,
                        '154':1,
                        '185':2,
                        '342':3,
                        '500':4,
                        '780':5,
                        'original':6
                }
                const urlPoster =`${dataImg?.secure_base_url}${dataImg?.poster_sizes && dataImg?.poster_sizes[resolutionP[size]] }`
                return urlPoster;

            case 'backdrop': ['w300', 'w780', 'w1280', 'original']
                let resolutionB = {
                    '300':0,
                    '780':1,
                    '1280':2,
                    'original':3
                }
                const urlBackdrop =`${dataImg?.secure_base_url}${dataImg?.poster_sizes && dataImg?.backdrop_sizes[resolutionB[size]] }`
                return urlBackdrop;
        }
        
    };

    const getGenres = (url) =>{  // se  reemplazo por getFetch
        const {dataGenres} = useGenres(url);
        return dataGenres;
    };

    const getFetch = (url,type,page)=>{   
       const  {data,loading} = useFetch(url,type,page);
        return {data,loading} ;
    };

    const goBack = () =>{
        navigate(-1);
    }

    return(
        <providerContex.Provider 
        value={{
            favoriteMovies,
            setFavoriteMovies,
            getMovies,
            getImageUrlFormat,
            getGenres,
            getFetch,
        }}>
            {children}
        </providerContex.Provider>
    )
};

export { Contexto,providerContex }