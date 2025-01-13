import { useEffect, useState } from "react";

function useUrlImagen () {
    const [dataImage,setDataImage] = useState();

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk'
            }
          };
          
          fetch('https://api.themoviedb.org/3/configuration', options)
            .then(response => response.json())
            .then(response => setDataImage(response?.images))
            .catch(err => console.error(err));
    },[])
        
        return (dataImage)
    }

    export { useUrlImagen }