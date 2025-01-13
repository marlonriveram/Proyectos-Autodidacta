import { Link } from 'react-router-dom';
import { useWindonw } from "../../Hooks/UseWidthWindonw/useWidthWindonw";
import './overlay.css'
const Overlay = ({title,overview}) =>{

    const {isMobile} = useWindonw();
    let editOverView = '';

    const lengthOverView = () =>{
        const numberCharacters = 200;
        if(overview.length > numberCharacters){
            return editOverView = overview.slice(0,numberCharacters).concat('...');
           }else {
            return editOverView = overview;
           }
    }
    return(
        <div className='overlay'>
            <h2 className='title-card'>{title}</h2>
            { !isMobile && <p className='overview-card'> {lengthOverView()} </p>}
        </div>
        
    )
};

export { Overlay }