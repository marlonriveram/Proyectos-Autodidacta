import { useLocation, useParams } from "react-router-dom";
import { useUrlImagen } from "../../Hooks/UrlImagen";
import "./detailView.css"
import { ButtonType } from "../../Componentes/ButtonType";
import { useWidthWindow } from "../../Hooks/WidthWindow";
import { useCredits } from "../../Hooks/useCredits";
function DetailView () {

    const {title} = useParams();
    const location = useLocation();

    const dataImagen = useUrlImagen();
    const {isMobile} = useWidthWindow();
    
    
    const movieDetail = location.state.find(movie => (movie.title || movie.name) === title);
    const credits = useCredits(movieDetail.id);//mirara luego
   
    const backdrop_path = `${dataImagen?.secure_base_url}${dataImagen?.backdrop_sizes[3]}/${movieDetail.backdrop_path}`;
    const poster_path = `${dataImagen?.secure_base_url}${dataImagen?.backdrop_sizes[3]}/${movieDetail.poster_path}`
    return (
        <>
        <div className="backdrop_path">
            <img className="image_backdrop_path" src={backdrop_path} alt="" />
            <div className="container-info-detail">
               {!isMobile && 
                <div className="poster_path">
                    <img className="poster_path_image" src={poster_path} alt="" />
                </div>
                }
                <div className="info-movie"> 
                    <h1>{movieDetail.title ||movieDetail.name}</h1>
                    <p>{movieDetail.overview}</p> 
                   <div>
                   <ButtonType
                     type={'like'}
                     size={40}
                     color={'gray'}
                     />
                   </div>
                </div>

            </div>
        </div>

        <section className="elenco">
                <h2>Elenco de la pelicula</h2>
        </section>
        </>
    )
};

export { DetailView }