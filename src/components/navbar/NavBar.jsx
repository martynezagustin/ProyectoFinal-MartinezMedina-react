import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch/useFetch';
import { API_URLS } from '../../constants';
import CartWidget from '../cartWidget/CartWidget';

function NavBar(props) {

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
            <Nav.Link href="#link">Acerca de</Nav.Link>
            <NavDropdown title="Categorías" id="categories">
              <Nav.Link as={Link} to={`/category/Movies`}>Movies</Nav.Link>
              <Nav.Link as={Link} to={`/category/Electronics`}>Electronics</Nav.Link>
              <Nav.Link as={Link} to={`/category/Shoes`}>Shoes</Nav.Link>
              <Nav.Link as={Link} to={`/category/Garden`}>Garden</Nav.Link>
              <Nav.Link as={Link} to={`/category/Outdoors`}>Outdoors</Nav.Link>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
