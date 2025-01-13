import { Link } from "react-router-dom";
import './headerCategories.css'
function HeaderCategories ({titulo,slug}) {
    return(
        <div className='header-categorie '>
          <h2 className='title-categorie text-2xl font-extralight '>{titulo}</h2>
          <Link
            to= {`/all-movies/${slug}`}>
            <p className='more-categories cursor-pointer font-semibold'>see all</p>
          </Link>
        </div>
    )
};

export { HeaderCategories }