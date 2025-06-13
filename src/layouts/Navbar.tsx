import * as React from 'react';
import './Navbar.css';
import { useUser } from '../providers/UseUser';
import { Link } from 'react-router-dom';

const Navbar: React.FunctionComponent = () => {

    const userContext = useUser();
    const [enteredUsername, setEnteredUsername] = React.useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredUsername(event.target.value);
    }

    return (
        <nav className='navbar'>
            <Link to="/" className='text-xl font-bold'> Lemonytube! </Link>
            <div className='right-menu'>
                <button className='navbar-button'>Learn more</button>
                {
                    !userContext.user &&
                    <>
                    <input className='color-black-200' type = "text" placeholder='username' value={enteredUsername} onChange={handleInputChange}></input>
                    <button className='navbar-button' onClick={() => {userContext.login(enteredUsername)}}>Sign in</button>
                    </>
                }
                {
                    userContext.user &&
                    <button className='navbar-button' onClick={userContext.logout}>Sign out {userContext.user.username} </button>
                }
            </div>
        </nav>
    );
};

export default Navbar;
