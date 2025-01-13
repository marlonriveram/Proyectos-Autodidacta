import { useLocation } from 'react-router-dom';
import './header.css'
const Header = ({children}) =>{
    const {pathname} = useLocation();
    return(
        
        <div className="header centrar">
            <h1 className="header__title">Todo List</h1>
            {children}
        </div>
    )

};

export { Header }