import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../fonts/fonts.css'
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" className='justify-content-center border-top border-5 border-danger'>
    <Container>
    <Navbar.Collapse id="basic-navbar-nav" className='col-4'>
        <Nav className="me-auto d-flex ps-5">
          <Nav.Link href="#home" className='text-light fs-5 pe-5 secondaryfont'>Funcional, Pilates y Yoga</Nav.Link>
          <Nav.Link href="#link" className='text-light fs-5 pe-5 secondaryfont'>Maquinas de Musculacion</Nav.Link>
          <Nav.Link href="#link" className='text-light fs-5 pe-5 secondaryfont'>Pesas, Discos y Barras</Nav.Link>
          <Nav.Link href="#link" className='text-light fs-5 pe-5 secondaryfont'>Proteccion y Rehabilitacion</Nav.Link>
          <Nav.Link href="#link" className='text-light fs-5 pe-5 secondaryfont'>Maquinas Cardiovasculares</Nav.Link>
          <Nav.Link href="#link"><CartWidget /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar