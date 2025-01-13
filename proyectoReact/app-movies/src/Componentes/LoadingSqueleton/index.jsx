import './loadingSkeleton.css'
const CarouselSkeleton = () =>{
    const cardSkeleton = Array.from({ length: 6 }, (_, index) => (
        <div className='cards-skeloton' key={index}>
            <div className='container-imagen-card-skeleton heigt-size cards-skeleton--color'></div>
        </div>
      )); /* Array.form({length:6},(valor,index,array)=>(los elementos que se iteran)), 
            permite cear un array del tamaño de 'LENGTH'*/

    return(
      <>
        <div className="carousel-skeleton">
            <div className="slider-skeleton">
               {cardSkeleton}
            </div>
        </div>
      </>
    )
};

const AllMoviesSkeleton = () =>{
    const cardsSkeletonItems = Array.from({ length: 8 }, (_, index) => (
        <div className='cards-skeloton' key={index}>
            <div className='container-imagen-card-skeleton heigt-size cards-skeleton--color'></div>
        </div>
      )); 
    return(
      <>
        <div className='all-movies-skeleton'>
            {cardsSkeletonItems}
        </div>
      </>
    )
};

export { CarouselSkeleton,AllMoviesSkeleton }