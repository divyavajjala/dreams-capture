import React from "react"
// import { Link } from "react-router-dom"
import logo from "../../src/assests/logo-transparent.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import MenuIcon from '@mui/icons-material/Menu';
function Header () {
    // const toggleNavItems=()=> {
    //     var elementArray = document.getElementsByClassName("navbar-nav");
    //     if (elementArray[0].className === 'navbar-nav') {
    //         elementArray[0].classList.add('showNavItems');
    //     } else {
    //         elementArray[0].classList.remove('showNavItems');
    //     }
    // }
    return(
        // <div className="navbar-container">
        //     <img src={logo} className="logo" alt="logo"></img>
        //     <span className="hamburger-icon" onClick={toggleNavItems}><MenuIcon></MenuIcon></span>
        //     <ul className="navbar-items">
        //         <li className="nav-item">
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/weddings">Weddings</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/babybump">BabyBump</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/sareefunction">SareeFunction</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/private">PrivateShoots</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/about">AboutUs</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/contact">ContactUs</Link>    
        //         </li>
        //     </ul>
        // </div>
        <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className="main-nav">
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} className="logo" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav me-auto">
            <li className='nav-item'>
                <Nav.Link href="/" >Home</Nav.Link>
            </li>
            <li className='nav-item'>
                <Nav.Link href="/weddings">Weddings</Nav.Link>
            </li>
            <li className='nav-item'>
            <Nav.Link href="/babybump">Babybump</Nav.Link>
            </li>
            <li className='nav-item'>
            <Nav.Link href="/sareefunction">SareeFunction</Nav.Link>
            </li>
            <li className='nav-item'>
            <Nav.Link href="/about">AboutUs</Nav.Link>
            </li>
            <li className='nav-item'>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </li>
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                <NavDropdown title="OtherServices" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/candid">Cndid Photograpy</NavDropdown.Item>
                <NavDropdown.Item href="/live">
                    Live streaming
                </NavDropdown.Item>
                <NavDropdown.Item href="/postwedding">Post wedding shoot</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/makeup">
                    Makeup artists
                </NavDropdown.Item>
                </NavDropdown>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Header;