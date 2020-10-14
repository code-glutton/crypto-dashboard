import React from 'react';
import './navItems.css';
import contact from '../../../resources/img/contactUs.svg';

function NavItems({name}){
    return(
        <div className='navItemsContainer'>
            <span className='navItemsSpan'></span>
            <div className='navItemsLogo'><img className='navItemsLogoImg' src={contact} alt='navImage'/></div>
            <div className='navItemsName'><p>{name}</p></div>
        </div>
    )
}

export default NavItems;