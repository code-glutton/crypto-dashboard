import React from 'react';
import './navBody.css';
import NavItems from '../navItems/navItems';
import {Link} from 'react-router-dom';
import live from '../../../resources/img/live.svg';
import news from '../../../resources/img/news.svg';
import convert from '../../../resources/img/convert.svg';
import contact from '../../../resources/img/contactUs.svg';

function NavBody(){
    return(
        <nav className='navBodyContainer'>
            <div>
                <Link to='/'>
                    <div className='live'>
                    <NavItems name='Live' img={live}/>
                    </div>
                    
                </Link>
                <Link to='/news'>
                    <NavItems name='News' img={news}/>
                </Link>
                <Link to='/convert'>
                    <NavItems name='Convert' img={convert}/>
                </Link>
                <Link to='/contactUs'>
                    <NavItems name='Contact' img={contact}/>
                </Link>
               
            </div>
        </nav>
    )
}

export default NavBody;