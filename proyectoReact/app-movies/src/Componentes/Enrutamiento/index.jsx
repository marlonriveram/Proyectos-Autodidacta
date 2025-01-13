import { Route, Routes } from "react-router-dom"
import { Home } from "../../pages/Home"
import { MoreMovies } from "../../pages/MoreMovies";
import { NotFound } from "../../pages/NotFound";
import { Genres } from "../../pages/Genres";
import { MovieDetail } from "../../pages/MovieDetails";
import { Search } from "../../pages/Search";


const Enrutamiento = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/search/:name" element={<Search/>}/>
            <Route path="/more-movies/:slug" element={<MoreMovies />}/>
            <Route path="/genres/:genre" element={<Genres/>}/>
            <Route path="/movie-detail" element={ <MovieDetail/>}/>
            <Route path="/*" element={<NotFound/> }/>
        </Routes>
    )
};

export { Enrutamiento }