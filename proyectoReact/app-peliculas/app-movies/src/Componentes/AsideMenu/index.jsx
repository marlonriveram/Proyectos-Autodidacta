import {  NavLink } from "react-router-dom";
import { useContext } from 'react';
import { useWidthWindow } from "../../Hooks/WidthWindow";
import { FiX } from "react-icons/fi";
import { Context } from "../Contexto";
import './asideMenu.css'

function AsideMenu () {
    const {isMobile} = useWidthWindow();
    const { isOpenAside,setIsOpenAside,} = useContext(Context);

    const clickClouse = () =>{
        setIsOpenAside(false);
    }

    const renderHamburguerMenu = () =>{
        return(
            <aside className={`aside-menu bg-gray-300 ${!isMobile && 'hidden'}`}>
            <ul className='navbar-aside'>
            <li>
                <NavLink
                    onClick={()=> clickClouse()}
                    to='/peliculas'
                >
                    Películas
                </NavLink>
                
            </li>
            <li>
                <NavLink
                    onClick={()=> clickClouse()}
                    to='/series-tv'
                >
                    Series Tv 
                </NavLink>
                
            </li>
            </ul>
            <FiX 
                size={36}
                onClick={()=> clickClouse()}
            />

        </aside>
        )
    };

    return(
       <>{isOpenAside && renderHamburguerMenu()}</>
    )
};

export {AsideMenu}