import './style.css'
function Hero (){
    const urlFondo = 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=600';
    const stylesHero = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${urlFondo}) `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center' 
    }
    return(
        <div style={stylesHero} className={` hero  `}>

        <div className='info-pelicula '>
            <h3 className='titulo-pelicula '>Nombre pelicula</h3>

            <p className='sinopsis-pelicula'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sint vitae perferendis a repudiandae saepe cumque magni aliquid dolorum dolores iure impedit dolorem unde, porro, distinctio esse fugiat neque non.</p>

          
        </div>
             
        </div>
    )
};
 
export {Hero}


     
