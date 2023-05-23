import React from "react"
// import { Link } from "react-router-dom"
import logo from "../../src/assests/logo_transparent.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header () {
    return(
        <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className="main-nav">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="logo" alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/weddings">Weddings</Nav.Link>
                        <Nav.Link href="/babybump">Babybump</Nav.Link>
                        <Nav.Link href="/sareefunction">SareeFunction</Nav.Link>
                        <Nav.Link href="/about">AboutUs</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <NavDropdown title="OtherServices" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/candid">Candid Photograpy</NavDropdown.Item>
                            <NavDropdown.Item href="/live">
                                Live streaming
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/postwedding">Post wedding shoot</NavDropdown.Item>
                            <NavDropdown.Item href="/makeup">
                                Makeup artists
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;