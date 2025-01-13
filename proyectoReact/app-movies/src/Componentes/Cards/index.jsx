import { Link } from 'react-router-dom';
import { forwardRef} from 'react';
import { useWindonw } from '../../Hooks/UseWidthWindonw/useWidthWindonw';
import './cards.css'


const Cards = forwardRef(({title,poster_path,overview,data,redirect,character},ref) =>{

    const {isMobile} = useWindonw();
    let editOverView = '';
    // Hacer esto mismo para los titulos
    const lengthOverView = () =>{
        const numberCharacters = 200;
        if(overview.length > numberCharacters){
            return editOverView = overview.slice(0,numberCharacters).concat('...');
           }else {
            return editOverView = overview;
           }
    };

  
    return( 
           <div ref={ref} className='cards'>        
                <figure className='container-imagen-card heigt-size'>
                    <img src={poster_path} alt="" className='imagen heigt-size' />
 
                    {redirect && <Link to={`/${redirect}`} state={data} > 
                        <div className='overlay'>
                            <h2 className='title-card'>{title}</h2>
                            <p className='character-card'>{character}</p>
                            { !isMobile && <p className='overview-card'> {lengthOverView()} </p>}
                        </div>
                    </Link>}

                    {!redirect &&  
                        <div className='overlay'>
                            <h2 className='title-card'>{title}</h2>
                            <p className='character-card'>{character}</p>
                            { !isMobile && <p className='overview-card'> {lengthOverView()} </p>}
                        </div>
                        }
                </figure>
            </div>
    )});

export { Cards }