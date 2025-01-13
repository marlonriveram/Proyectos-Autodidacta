import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { providerContex } from "../../Componentes/Contexto/Contexto";
import { urlApi } from "../../urlApi";
import { ContainerGenres } from "../../Componentes/ContainerGenres";
import { Genero } from "../../Componentes/Genero";
import { Carousel } from "../../Componentes/Carousel";
import { ButtonRows } from "../../Componentes/ButtonRows";
import './movieDetail.css'

const MovieDetail = () =>{
    const {state:movie} = useLocation();
    const navigate = useNavigate();
    const {
        getImageUrlFormat, 
        getFetch
    } = useContext(providerContex);

    
    const urlFormat = getImageUrlFormat(urlApi.ImageFormat,'backdrop');
    const urlBackdrop = movie?.backdrop_path;
    
    const urlGenres = urlApi.Genres.allGenres;
    const{data:genres,loading:loading} = getFetch(urlGenres,'genres');
    
    const urlCredits = urlApi.creditos(movie.id);

    const getGenresMovie = (movie) =>{
        return genres.filter((genre) =>{
            return movie?.genre_ids.includes(genre.id);
        })
    };

   
    const goBack = () =>{
        navigate(-1);
    }

    const urlFormatImagen = urlApi.ImageFormat;
    const urlVideo = urlApi.videos(movie.id);
    const{data:video,loading:loadingVideos} = getFetch(urlVideo,'video');
   

    const inicio = () =>{
        window.scrollTo(0, 0);
    }
    inicio();
        
    return(
        <section className="movie-detail ">
            <figure className="hero movie-detail-width ">
                <ButtonRows direcction={'rowLeft'} position={'top'} color={'white'} handle={goBack}/>
                <div className="gradient"></div>
                <img className=" img-backdrop movie-detail-width " src={`${urlFormat}${urlBackdrop}`} alt="imagen de fondo" />
            </figure>

            <div className="container-info-movie">
                <div className="info-movie">
               <div className="description-movie">
               <h2 className="movie-detail-title">{movie.title}</h2>
                <p className="movie-detail-overview">{movie.overview}</p>
               </div>

                <ContainerGenres 
                    dataGenres={getGenresMovie (movie)}
                    render={(genero)=>(
                        <Genero 
                            key={genero.id} 
                            genero={genero.name}
                            idGenero={genero.id}
                        />
                    )}
                />

                <Carousel
                    dataSource={{url:urlCredits,type:'credits'}}
                    imageUrlFormat={getImageUrlFormat(urlFormatImagen,'poster','780')}
                    redirect={null}
                />        

                </div>
                <div className="trailer">
                    <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${video}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write;encrypted-media;gyroscope;picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
};

export{ MovieDetail }