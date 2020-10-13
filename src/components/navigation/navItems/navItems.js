import React from 'react';
import './navItems.css';

function NavItems({name}){
    return(
        <div className='navItemsContainer'>
            <button className='navItemsButton'>{name}</button>
        </div>
    )
}

export default NavItems;