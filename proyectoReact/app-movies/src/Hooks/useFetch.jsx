import { useContext, useEffect, useState } from "react";
import { providerContex } from "../Componentes/Contexto/Contexto";

const useFetch = (url,type,page=1) => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const fetchType = (type, response) => {
        switch (type) {
            case 'FormatImg':
                setData(response?.images);
                break;
            case 'genres':
                setData(response?.genres);
                break;
            case 'movies':
                setData(prev => prev.concat(response.results));
                break;
            case 'credits':
                setData(response.cast);
                break;
            case 'video':
                setData(response.results[0].key);
                break;
            default:
                // Manejar casos no especificados
                break;
        }
    };

    useEffect(() => {
        setLoading(true);
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGMwMjhhZDQyMTIwOTI5ZTVmYmI2YTg4YjVjYmRiZCIsInN1YiI6IjY0ZjIyYWUzNzQ1MDdkMDBlMmI5Zjk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KAYW3hmWLfRElJp0t2KJr2zlE5OJVoghGeM0CvCbaPk'
                }
            };
        
            fetch(url, options)
            .then(response => response.json())
            .then(response => fetchType(type, response)) // Aquí se pasa la respuesta a fetchType
            .catch(err => setError(err))
            .finally(()=>setLoading(false))
        
    },[page]);


    return {data,loading,error };
};

export { useFetch };
