import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className='headerContainer'>
            <Link to='/'>
                <div className='headerTitleDiv'>
                    <p className='headerTitleText'>Logo</p>
                </div>
            </Link>
        </header>
    )
}

export default Header;