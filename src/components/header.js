import React from "react"
import { Link } from "react-router-dom"
import logo from "../../src/assests/logo-transparent.png"
import MenuIcon from '@mui/icons-material/Menu';
function Header () {
    const toggleNavItems=()=> {
        var elementArray = document.getElementsByClassName("navbar-items");
        if (elementArray[0].className === 'navbar-items') {
            elementArray[0].classList.add('showNavItems');
        } else {
            elementArray[0].classList.remove('showNavItems');
        }
    }
    return(
        <div className="navbar-container">
            <img src={logo} className="logo" alt="logo"></img>
            <span className="hamburger-icon" onClick={toggleNavItems}><MenuIcon></MenuIcon></span>
            <ul className="navbar-items">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/weddings">Weddings</Link>
                </li>
                <li className="nav-item">
                    <Link to="/babybump">BabyBump</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sareefunction">SareeFunction</Link>
                </li>
                <li className="nav-item">
                    <Link to="/private">PrivateShoots</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">AboutUs</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">ContactUs</Link>    
                </li>
            </ul>
        </div>
    )
}
export default Header;