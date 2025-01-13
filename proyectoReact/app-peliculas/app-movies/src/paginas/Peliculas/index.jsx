import { Hero } from "../../Componentes/Hero"
import { ContainerCategories } from "../../Componentes/ContainerCategories";
import {urls} from "../../dataMovies"
import { Categories } from "../../Componentes/Cateories";
import { HeaderCategories } from "../../Componentes/HeaderCategories";
import { Carousel } from "../../Componentes/Carousel"
function Peliculas () {
    return(
        <>
        <Hero />
        <ContainerCategories 
            movies={urls.movieCategory} 
            render={movie =>(
                <Categories key={movie.slug}>

                <HeaderCategories titulo={movie.name} slug={movie.slug} />
                <Carousel url={movie.url}/>

                </Categories>
              )}
        >

        </ContainerCategories>
        </>
    )
};

export {Peliculas}