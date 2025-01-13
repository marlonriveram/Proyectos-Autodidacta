
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useWindonw } from '../../Hooks/UseWidthWindonw/useWidthWindonw';
import { ButtonType } from '../ButtonType';
import './header.css'
const Header = () =>{
   const {pathname} = useLocation()
   
    const {isMobile} = useWindonw();
    return(
        <header className={`header ${pathname === '/movie-detail' ?'display-none':''}`}>
            <Link to={'/'} className='decoration-none'>
                <div className='logo '>🍿Movies</div>
            </Link>
          
            {/* <ul className='loging'>
                <NavLink className='inicio-sesion btn-Header decoration-none' to={'login'}>
                    <li >Iniciar Sesion</li>
                </NavLink>

                <NavLink className='registrarse btn-Header decoration-none' to={'/signUp'}>
                    <li >Registrarse</li>
                </NavLink>
            
              
            </ul>
            { isMobile && <ButtonType type={'hamburguesa'}/>} */}
        </header>
    )
};

export { Header }