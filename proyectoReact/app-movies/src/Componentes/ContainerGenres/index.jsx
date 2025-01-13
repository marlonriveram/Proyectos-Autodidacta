import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { providerContex } from '../Contexto/Contexto';
import './containerGenres.css'

const ContainerGenres = ({render,url,dataGenres}) =>{
    const {
        getFetch,
    } = useContext(providerContex);
    const {pathname} = useLocation();

    const {data:genres,loading} = getFetch(url,'genres')
    return(
        <>
        {!loading &&
            <div className="container-genres">
            <h2 className={`title-container-genres ${pathname === '/movie-detail' ?'display-none':''}`}>Generos</h2>
            <div className="genres">
                {(dataGenres || genres)?.map(render)}
            </div>
        </div>}
        </>
    )
};

export { ContainerGenres }