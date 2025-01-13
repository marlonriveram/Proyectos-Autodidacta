import { useEffect, useState } from "react";

const useFormatImg = (api) =>{
    const [dataImg,setDataImg] = useState({});
    const [error,setError] = useState('');
    
    useEffect(()=>{
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk'
                }
            };

            fetch(api, options)
            .then(response => response.json())
            .then(response => setDataImg(response?.images))
            .catch(err => setError(err))       
    },[]);

    

    return {dataImg,error}
};

export { useFormatImg }