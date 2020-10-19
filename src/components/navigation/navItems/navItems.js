import React from 'react';
import './navItems.css';

function NavItems({name,img}){
    

    return(
        <div className='navItemsContainer'>
            <span className='navItemsSpan'></span>
            <div className='navItemsLogo'><img className='navItemsLogoImg' src={img} alt='navImage'/></div>
            <div className='navItemsName'><p>{name}</p></div>
        </div>
    )
}

export default NavItems;