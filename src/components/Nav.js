import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/water-drop 3.svg';



 const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <div className="header-navbar">
                <img src={logo} alt="logo" />
                <h1>Waves Music App</h1>
            </div>
            
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />   
            </button> 
        </nav>
    )
}

export default Nav