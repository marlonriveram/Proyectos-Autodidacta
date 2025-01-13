import { useContext, useRef, useState } from 'react';
import { useWindonw } from '../../Hooks/UseWidthWindonw/useWidthWindonw';
import { Cards } from '../Cards';
import { ButtonRows } from '../ButtonRows';
import { Slider } from '../Slider';
import { providerContex } from "../Contexto/Contexto";
import { CarouselSkeleton } from '../LoadingSqueleton';
import './carousel.css'

const Carousel = ({imageUrlFormat,redirect,dataSource}) =>{
    const {getFetch} = useContext(providerContex);
    const {isMobile} = useWindonw();
    const ref = useRef(null);
    
   
  
    const moveCarouselLeft = () =>{
        const slider= ref?.current;      
        slider.scrollLeft += slider?.offsetWidth;
    }
        
   const moveCarouselRight = () =>{
        const slider= ref?.current;      
        slider.scrollLeft -= slider?.offsetWidth;
    } 

    const {data,loading} = getFetch( dataSource.url,dataSource.type);

    
 
    return(
        <>
        {loading && <CarouselSkeleton/>}
        {!loading && 
            <div className='carousel'>
            <Slider 
               ref={ref}
               isMobile={!isMobile}
               data={data}
               rowLeft={ <ButtonRows direcction={'rowLeft'} position={'center'} color={'910A67'} handle={moveCarouselLeft} />}
               rowRight={ <ButtonRows direcction={'rowRight'} position={'center'} color={'910A67'} handle={moveCarouselRight} />}
               render={(data) =>( 
                ((data.profile_path || data.poster_path ) &&   
                   <Cards
                   key={data.id}
                   poster_path={`${imageUrlFormat}${data.poster_path || data.profile_path}`}
                   overview={data.overview || ''}
                   title={data.title || data.name} 
                   character={data.character}
                   data={data}
                   redirect={redirect}
                   
                   />)
               )}
           />
       </div>
        }
        </>
    )
};

export { Carousel }