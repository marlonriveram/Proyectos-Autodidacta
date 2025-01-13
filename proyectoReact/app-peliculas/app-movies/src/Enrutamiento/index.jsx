import { Navigate, Route, Routes } from "react-router-dom";
import { Peliculas } from "../paginas/Peliculas";
import { SeriesTv } from "../paginas/SeriesTv";
import { DetailView } from "../paginas/detailedView"
import { NotFound } from "../paginas/NotFound";
import { AllMovies } from "../paginas/AllMovies";



function Enrutamiento () {
    return(
        <Routes>
            <Route path="/peliculas" 
            element ={ <Peliculas />}/>
            <Route path="/series-tv" 
            element ={<SeriesTv />}/>
            <Route path="/" 
            element ={<Navigate to={'/peliculas'}/>}/>
            <Route path="/all-movies/:slug" 
            element ={<AllMovies/>}/>
            <Route path="/detail-View/:title" element = {<DetailView/>}/>
            <Route path="*" 
            element ={<NotFound />}/>
        </Routes>
    )
}

export {Enrutamiento}