import { useState } from "react"

const useWindonw = () => {
    const [isMobile,setIsMobile] = useState( window.innerWidth <= 530)
   
    window.addEventListener('resize', ()=>{
        setIsMobile(window.innerWidth <= 530)
    })
    return {isMobile}
};

export { useWindonw }