import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to = '/'>
            <div className="logo">
                <Logo />
            </div>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/option'>OPTION</Link>
            {
                currentUser ? (
                <div className='option' onClick = {() => auth.signOut()}>
                    SIGN OUT
                </div>
                ):(
                <Link className='option' to='/signin'> 
                    SIGN IN
                </Link>
            )}
        </div>

    </div>
)

export default Header;