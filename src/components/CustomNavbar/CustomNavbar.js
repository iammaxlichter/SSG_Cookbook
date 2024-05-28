import React from 'react';
import '../../assets/styles/CustomNavbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../App.css'; // Ensure your CSS file is imported
import logo from '../../assets/images/MiscPhotos/ssgCBlogo.png';  // Make sure to import the logo image

function CustomNavbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Navbar className='customNavbar' expand="lg" variant="dark" style={{ backgroundColor: '#004F9B' }}>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        style={{ height: '50px', marginLeft: '10px' }} // Corrected style usage
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{ marginLeft: '10px'}}>
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => scrollToSection('home')} style={{ fontSize: '17px', fontWeight: 600, marginRight: '9px' }} className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('about')} style={{ fontSize: '17px', fontWeight: 600, marginRight: '9px' }} className="nav-link-custom">About</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('recipes')} style={{ fontSize: '17px', fontWeight: 600, marginRight: '9px' }} className="nav-link-custom">Recipes</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('buy')} style={{ fontSize: '17px', fontWeight: 600, marginRight: '9px' }} className="nav-link-custom">Buy</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('contact')} style={{ fontSize: '17px', fontWeight: 600, marginRight: '9px' }} className="nav-link-custom">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;