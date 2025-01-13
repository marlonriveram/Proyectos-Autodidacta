import { useState } from "react";
import style from './styles.module.css'
import { useRef } from "react";
import clsx from "clsx";
const VideoPlayer = ({src}) =>{
    const[playing,setPlayig] = useState(false);
    const video = useRef(null);
    
    const handler = () =>{
        const { current:control } = video;
        !playing ? control.play() : control.pause();
        setPlayig(!playing);
    }

    const playerClassName = clsx(style.player,{
        [style.hidden] : playing
    })

    return(
          <div className={style.container__video}>
             <video 
             ref={video}
             className={style.video}
             onClick={handler}
             loop
             >
                <source  src={src} type="video/mp4"/>
             </video>
            <i className={playerClassName}></i>
             
          </div>
    )
}

export { VideoPlayer }