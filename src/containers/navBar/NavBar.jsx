import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

import './navBar.css';

const NavBar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
           <div className="navbar-links">
               <div className="navbar-links-container">
                    <p><a href="#sobreNos">Sobre Nós</a></p>
                    <img src={logo}/>
                    <p><a href="#shopping">Shopping</a></p>
                </div>
                <div className="navbar-menu">
                    <img src={logo}/>
                    {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)} />}
                    {toggleMenu && ( 
                            <div className="navbar-menu-container scale-up-center">
                                <div className="navbar-menu-links">
                                    
                                    <p><a href="#sobreNos">Sobre Nós</a></p>
                                    <p><a href="#shopping">Shopping</a></p>
                                </div>
                            </div>
                    )}
                </div>
                
           </div>
        </div>
    )
}
export default NavBar
