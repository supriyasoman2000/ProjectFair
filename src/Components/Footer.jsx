import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex flex-column justify-content-center align-items-center bg-primary text-light '>
        <div className='footer-div d-flex justify-content-evenly w-100 flex-wrap'>
          <div className="website" style={{width:'400px'}}>

          <h4 className='mb-3'><i class="fa-brands fa-stack-overflow "></i>Project Fair</h4>
          <h6>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</h6>
          <h6>Code licensed Luminar,docs CC By 3.0.</h6>
          <p>Currently v1.0.0.</p>
          
          </div>
          <div className="links d-flex flex-column ">
            <h4>Links</h4>
            <Link to={'/'} style={{ textDecoration:'none', color:'white' }}>Home</Link>
            <Link to={'/register'} style={{ textDecoration:'none', color:'white' }}>Register</Link>
            <Link to={'/login'} style={{ textDecoration:'none', color:'white' }}>Login</Link>
            <Link to={'/projects'} style={{ textDecoration:'none', color:'white' }}>Projects</Link>
            <Link to={'/dashboard'} style={{ textDecoration:'none', color:'white' }}>Dashboard</Link>

          </div>
          <div className="guides d-flex flex-column ">
          <h4 className='mb-3'>Guides</h4>
            <Link to={'https://getbootstrap.com/'} style={{ textDecoration:'none', color:'white' }}>React</Link>
            <Link to={'https://getbootstrap.com/'} style={{ textDecoration:'none', color:'white' }}>React Bootstrap</Link>
            <Link to={'https://getbootstrap.com/'} style={{ textDecoration:'none', color:'white' }}>Routing</Link>
          </div>
          <div className="contact">
            <h4 className='mb-3'>Contact Us</h4>
            <div className="sub d-flex mt-3">
              <input type="text" className="form-control" placeholder='Enter Your Email Id' />
              <button className='btn btn-warning text-light ms-3 w-50'>Subscribe</button>
            </div>
            <div className="icons fs-4 d-flex justify-content-between mt-3">
            <Link to={'https://getbootstrap.com/'} style={{ textDecoration:'none', color:'white' }}><i className="fa-solid fa-envelope"></i></Link>
            <Link to={'https://getbootstrap.com/'} style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-twitter"></i></Link>
            <Link to={'https://getbootstrap.com/'} style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://getbootstrap.com/'} style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-instagram"></i></Link>
            <Link to={'https://getbootstrap.com/'} style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-github"></i></Link>
            <Link to={'https://getbootstrap.com/'} style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-facebook"></i></Link>

            </div>
          </div>
        </div>
          <p  style={{marginTop:'40px'}}>Copyright © 2023 Project Fair.Built with React.</p>
  
    </div>
  )
}

export default Footer