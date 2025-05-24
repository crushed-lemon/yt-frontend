import * as React from 'react';
import './Navbar.css';

const Navbar: React.FunctionComponent = () => {
    return (
        <nav className='navbar'>
            <div className='text-xl font-bold'> Lemonytube! </div>
            <div className='right-menu'>
                <button className='navbar-button'>Learn more</button>
                <button className='navbar-button'>Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
