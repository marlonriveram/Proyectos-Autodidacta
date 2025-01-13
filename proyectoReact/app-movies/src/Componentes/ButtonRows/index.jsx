import { ButtonType } from "../ButtonType";
import './rows.css'

const ButtonRows = ({direcction,position,color,handle}) =>{
    const leftOrRight = direcction === 'rowLeft'?'btn_row_left':'btn_row_rigth';

//    const move = () =>{
//     const slider= document.querySelector('.slider');    
//     const moveRigh = () => slider.scrollLeft += slider.offsetWidth;
//     const moveLeft = () => slider.scrollLeft -= slider.offsetWidth;
//     if(direcction === 'rowLeft'){
//         return moveLeft
//     }else{
//         return moveRigh
//     }
//    }
    return(
        <div 
        onClick={()=> handle(direcction)}
        className={`btn_row btn_row---${position} ${leftOrRight}`}>

            <ButtonType type={direcction} size={50} color={color}/>
        </div>
    )
};

export { ButtonRows }