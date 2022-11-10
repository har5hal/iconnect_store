import React from "react";

import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";

const Header = () => {
    return (
        <Navbar className="bg-primary">
            <Container>
                <Navbar.Brand href="/" className="text-white text-uppercase fw-bold">Iconnect Store</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Item>
                        <Link to="/" className="nav-link text-white">Home</Link>
                    </Nav.Item>
                </Nav>
                
                <Nav>
                    <Nav.Link href="#/cart" className="text-center" 
                    style={{border: "2px solid #FFF", borderRadius: ".5rem"}}>
                        <BiCart size={24} className="text-white" style={{marginLeft: "-.1rem"}} />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;