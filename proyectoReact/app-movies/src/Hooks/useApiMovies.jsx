import { useContext, useEffect, useState } from "react";
import { providerContex } from "../Componentes/Contexto/Contexto";

const useApiMovies = (url,page=1) =>{
    const [dataMovie,setDataMovie] = useState([]);
    const [error,setError] = useState('');
   
   
    useEffect(()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk'
                }
            };

            fetch(url, options)
            .then(response => response.json())
            .then(response => setDataMovie(prev => prev.concat(response.results)))
            .catch(err => setError(err))       
    },[page])

    

    return{dataMovie,error}
};

export { useApiMovies }