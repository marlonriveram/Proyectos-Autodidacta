import { useEffect, useState } from "react";

function useApiPelicula (urlPelicula,page) {
  const [dataMovie,setDataMovie] = useState ([])
  
  useEffect(() =>{
    
    const options = { 
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk'
      }
    };
    
    fetch(urlPelicula, options)
      .then(response => response.json())
      .then( response => setDataMovie(movies =>movies?.concat(response.results)))
      .catch(err => console.error(err));
    },[page]) // cada que cambie page se ejecuta el efecto
    return{dataMovie}
};

export {useApiPelicula}