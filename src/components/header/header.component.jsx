import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to = '/'>
            <div className="logo">
                <Logo />
            </div>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/option'>OPTION</Link>
        </div>
    </div>
)

export default Header;