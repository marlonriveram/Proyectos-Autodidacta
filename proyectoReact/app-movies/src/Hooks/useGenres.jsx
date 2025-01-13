import { useEffect, useState } from "react";

const useGenres = (api) =>{

    const [dataGenres,setDataGenres] = useState([]);
    useEffect(()=>{
        const options = {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                accept:'application/json',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk'
            }
        };
        fetch(api,options)
        .then(response => response.json())
        .then(response => setDataGenres(response.genres))
        .catch (error => console.log(error));
    },[]);

    
    return { dataGenres }
};


export { useGenres }

