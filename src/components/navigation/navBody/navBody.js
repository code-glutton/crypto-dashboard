import React from 'react';
import './navBody.css';
import NavItems from '../navItems/navItems';
import {Link} from 'react-router-dom';

function NavBody(){
    return(
        <nav className='navBodyContainer'>
            <div>
                <Link to='/'>
                    <NavItems name='Live'/>
                </Link>
                <Link to='/news'>
                    <NavItems name='News'/>
                </Link>
                <Link to='/convert'>
                    <NavItems name='Convert'/>
                </Link>
               
            </div>
        </nav>
    )
}

export default NavBody;