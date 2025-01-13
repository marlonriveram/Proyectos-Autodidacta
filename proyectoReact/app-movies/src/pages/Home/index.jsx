import { useContext, useEffect } from "react";
import { Buscador } from "../../Componentes/Buscador";
import { ContainerCarousel } from "../../Componentes/ContainerCarousel";
import { HeaderCarousel } from "../../Componentes/HeaderCarousel";
import { Carousel } from "../../Componentes/Carousel";
import { ContainerGenres } from "../../Componentes/ContainerGenres";
import { Genero } from "../../Componentes/Genero";
import { urlApi} from "../../urlApi";
import { providerContex } from "../../Componentes/Contexto/Contexto";
import './home.css'


const Home = () =>{
    const {
        getFetch,
        getImageUrlFormat,
    } = useContext(providerContex);
       
    const urlFormatImagen = urlApi.ImageFormat;
    const urlGenres = urlApi?.Genres.allGenres;
  

    return(
        <section className='home'>
            <Buscador />
                            
            {urlApi.movies.map(category =>(
                <ContainerCarousel key={category.slug} >
                    <HeaderCarousel title={category.name} slug={category.slug}/>
                      <Carousel 
                        dataSource={{url:category.url(1),type:'movies'}}
                        imageUrlFormat={getImageUrlFormat(urlFormatImagen,'poster','780')}
                        redirect={'movie-detail'}
                        />
                </ContainerCarousel>    
            ))}
             
            <ContainerGenres 
                url={urlGenres }
                render={(genero)=>(
                <Genero 
                key={genero.id} 
                genero={genero.name}
                idGenero={genero.id}
                />
             )}
             />
        </section>
    )
};

export { Home }

