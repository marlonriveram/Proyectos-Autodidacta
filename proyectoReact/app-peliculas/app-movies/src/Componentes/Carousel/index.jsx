import { useContext,useRef } from 'react'
import { useApiPelicula } from '../../Hooks/ApiPeliculas'
import { Card } from '../CardsCarousel'
import { useWidthContainer } from '../../Hooks/WidthContainers';
import { ButtonType } from '../ButtonType'
import { Context } from '../Contexto';
import './index.css'
import { useWidthWindow } from '../../Hooks/WidthWindow';

function Carousel ({url}) {

    const containerCarouselRef = useRef(null);
    const {moveLeft,moveRight} =  useContext(Context);
    const {isMobile} = useWidthWindow();
   
    
    
    const {dataMovie} = useApiPelicula(url,1);
    const {containerCarouselWidth} = useWidthContainer(containerCarouselRef);// permite saber la dimencion del conatainer del carousel
    return(
        <div className='carosuel'>
            {!isMobile && 
             <ButtonType
                type={'letArrow'}
                size={120}
                color={'black'}
                onClick={() => moveLeft(containerCarouselRef,containerCarouselWidth)}
            />}
         

            <div className='container-slider'
                ref={containerCarouselRef}
            >
                <div className="slider">
                    {dataMovie?.map((item) =>(
                    <Card
                        key={item.id}
                        poster={item.poster_path}
                        title={item.title || item.name}
                        dataMovie={dataMovie}

                    />))}

                </div>
            </div>

           {!isMobile &&  
           <ButtonType
                type={'rightArrow'}
                size={120}
                color={'black'}
                onClick={() => moveRight(containerCarouselRef,containerCarouselWidth)}
            />}
            
        </div>
    )
}

export { Carousel }