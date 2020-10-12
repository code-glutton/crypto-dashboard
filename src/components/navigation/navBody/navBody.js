import React from 'react';
import './navBody.css';
import NavItems from '../navItems/navItems';

function NavBody(){
    return(
        <nav className='navBodyContainer'>
            <NavItems/>
        </nav>
    )
}

export default NavBody;