import { useEffect, useState} from "react";

function useWidthContainer (containerCarouselRef) {
    
    const [containerCarouselWidth,setContainerCarouselWidth] = useState(0);
    useEffect(() =>{
        const observador = new ResizeObserver((entries) =>{  // ResizeObserver es para que cada vez que un contenedor cambie de tamaño observar
            setContainerCarouselWidth(entries[0].contentRect.width)
         
        });
       if(containerCarouselRef.current ){
        observador.observe(containerCarouselRef.current)
       }

       return () => {
        observador.disconnect();
    };
    },[])
    
    return {containerCarouselWidth}
}

export {useWidthContainer}