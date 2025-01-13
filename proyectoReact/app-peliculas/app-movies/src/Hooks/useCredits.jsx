import { useEffect, useState } from "react"

function useCredits (movie_id) {

    const [credits,setCredist] = useState([])
    useEffect(() =>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`, options)
            .then(response => response.json())
            .then(response => setCredist(response))
            .catch(err => console.error(err));
    },[])
    return(credits)
};

export { useCredits }