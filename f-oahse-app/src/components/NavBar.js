import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaInfo, FaEnvelope } from 'react-icons/fa';

const Navigationbar = () => {
  const navLinks = [
    { label: 'Home', url: '/', icon: <FaHome /> },
    { label: 'About', url: '/about', icon: <FaInfo /> },
    { label: 'Contact', url: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <Navbar bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <span className="d-inline d-md-none">Icon</span>
          <span className="d-none d-md-inline">Sticky top</span>
        </Navbar.Brand>
        <Nav className="ml-auto">
          {navLinks.map((link, index) => (
            <Nav.Link key={index} href={link.url}>
              <span className="d-inline d-md-none">{link.icon}</span>
              <span className="d-none d-md-inline">{link.label}</span>
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
