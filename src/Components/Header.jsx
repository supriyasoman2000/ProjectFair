import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({insideDashboard}) {
  return (
    <Navbar style={{backgroundColor:'#158cba',border:'none'}} className='position-fixed top-0 w-100'>
        <Container>
          <Navbar.Brand >
          <Link to={'/'}  style={{textDecoration:'none',color:"white"}} className='fw-bolder fs-3'>
            <i class="fa-brands fa-stack-overflow fa-bounce "></i>Project Fair</Link>
          </Navbar.Brand>
{  insideDashboard &&       
 <button className='btn btn-warning'>LogOut <i class="fa-solid fa-arrow-right-from-bracket fa-beat-fade"></i></button>
}        </Container>
      </Navbar>
  )
}

export default Header