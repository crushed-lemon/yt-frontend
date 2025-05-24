import * as React from 'react';
import './Navbar.css';
import { Outlet } from 'react-router-dom';

const Navbar: React.FunctionComponent = () => {
    return (
        <div>
            <nav>
                <div className='header'>
                    <div className='product-items'>
                        <h2>Welcome to youtube</h2>
                    </div>
                    <div className='user-items'>
                        <button>Sign in</button>
                    </div>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Navbar;
