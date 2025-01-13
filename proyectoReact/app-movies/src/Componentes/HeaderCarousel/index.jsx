import { Link } from 'react-router-dom';
import './headerCarousel.css'
const HeaderCarousel = ({title,slug}) =>{
    return(
        <div className="header-carousel">
            <h3 className='header-carousel-title header-carousel---text_color'>{title}</h3>
            <Link to={`/more-movies/${slug}`} className='see-more '>
                <p className='header-carousel---text_color'>See More</p>
            </Link>
        </div>
    )
};

export { HeaderCarousel }