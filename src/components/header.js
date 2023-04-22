import React from "react"
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';

function Header () {
    return(
        <div className="navbar-container">
            <span className="logo">Dreams Capture</span>
            <span className="logo-tagline">Photography</span>
            <span className="hamburger-icon"><MenuIcon></MenuIcon></span>
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
                    <Link to="/saree">SareeFunction</Link>
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