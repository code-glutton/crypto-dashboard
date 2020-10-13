import React from 'react';
import './navBody.css';
import NavItems from '../navItems/navItems';

function NavBody(){
    return(
        <nav className='navBodyContainer'>
            <div>
                <NavItems className='navBodyContainerItem' name='Live'/>
                <NavItems className='navBodyContainerItem' name='History'/>
                <NavItems name='Convert'/>
            </div>
        </nav>
    )
}

export default NavBody;