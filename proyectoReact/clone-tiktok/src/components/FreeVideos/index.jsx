import { VideoPlayer } from "../VideoPlayer";
import style from "./style.module.css"
const videos = [
    {
        id:1,
        src:"../../../assets/video/video1.mp4",
        autor:'moises ebrahin',
        overview:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, nostrum, accusamus facilis ad veritatis dignissimos',
        likes:123,
        shares:245,
        comments:'esto es un comentario'
    },
    {
        id:2,
        src:"../../../assets/video/video2.mp4",
        autor:'moises ebrahin',
        overview:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, nostrum, accusamus facilis ad veritatis dignissimos',
        likes:123,
        shares:24,
        comments:'esto es un comentario'
    }
    
];

export function FreeVideos () {
    return(
        videos.map((video) =>(
            <div className={style.item} key={video.id} >
                <VideoPlayer {...video}/>
            </div>
         ))
       
       
      
    )
}