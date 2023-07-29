import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch/useFetch';
import { API_URLS } from '../../constants';

function NavBar() {

  const { data: products } = useFetch(API_URLS.PRODUCTS.url, API_URLS.PRODUCTS.config)
  const navigate = useNavigate()
  const categoriesData = products.map((prod) => prod.category)
  const categories = [...new Set(categoriesData)]

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">Urban Diamond Beats</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Acerca de</Nav.Link>
            <NavDropdown title="Categorías" id="categories">
              {categories.map((category) => <Nav.Link as={Link} key={category} to={`/category/${category}`}>{category}</Nav.Link>)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
