import { Hero } from "../../Componentes/Hero"
import { ContainerCategories } from "../../Componentes/ContainerCategories";
import { Categories } from "../../Componentes/Cateories";
import { HeaderCategories } from "../../Componentes/HeaderCategories";
import { Carousel } from "../../Componentes/Carousel";
import { urls} from "../../dataMovies";



function SeriesTv () {
    return(
        <>
        <Hero />
        <ContainerCategories 
            movies={urls.tvSeriesCategory} 
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

export {SeriesTv}