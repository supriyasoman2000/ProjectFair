import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar style={{backgroundColor:'#158cba'}} className='position-fixed top-0 w-100'>
        <Container>
          <Navbar.Brand >
          <Link to={'/'}  style={{textDecoration:'none',color:"white"}} className='fw-bolder fs-3'></Link>
            <i class="fa-brands fa-stack-overflow fa-bounce "></i>Project Fair
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header