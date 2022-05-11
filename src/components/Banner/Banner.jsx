import React from 'react'
import { Row } from 'react-bootstrap'
import logo from '../imgs/logo.png'
import '../fonts/fonts.css'

const Banner = () => {
  return (
    <Row className='bg-dark g-0 align-items-center justify-content-center'>
        <h1 className='fs-1 mainfont text-light'>ADAMAS</h1>
        <div><img src={logo} alt="logo" className='img-fluid w-25' /></div>
        
        <h2 className='fs-1 mainfont text-light'>SHOP</h2>
    </Row>
  )
}

export default Banner