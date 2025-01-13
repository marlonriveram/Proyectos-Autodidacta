import { useContext, useState} from "react";
import { providerContex } from "../Componentes/Contexto/Contexto";


const useAddFavorite = (url) =>{
    const {setFavoriteMovies} = useContext(providerContex)

    const addFavorites = (movieId) =>{ // se crea la funcion para que exportarla y se de  cuando se presione el boton
            const options = {
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  'content-type': 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk'
                },
                body: JSON.stringify({
                    media_type: 'movie',
                    media_id: movieId,
                    favorite: true,
                })
            };

            fetch(url, options)
            .then(response => response.json())
            .then(response => {
                if (response && response.success) {
                    const url2 = 'https://api.themoviedb.org/3/account/20384868/favorite/movies'; // URL para traer los favoritos
                    const options = {
                      method: 'GET',
                      headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk', // Tu token de autorización
                      },
                    };
          
                    // Segunda petición para traer los favoritos
                    fetch(url2, options)
                      .then(response => response.json())
                      .then(response => { setFavoriteMovies(response.results)})
            }})
            .catch(err => console.log(err))
            
        }

      
    return { addFavorites }
};

export { useAddFavorite }