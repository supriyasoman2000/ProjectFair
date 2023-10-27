import React from 'react'
import { Row , Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
       {/* Landing page */}
       <div style={{width:'100%',height:'100vh',backgroundColor:'#158cba'}} className='container-fluid rounded'>
        <Row className='align-items-center p-5'>

          <Col sm={12} md={6}>
            <h1 style={{fontSize:'50px'}} className='fw-bolder text-light'><i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h1>
            <p style={{color:'white'}}>Software development innovative project ideas are an integral part of a Software Engineer/Developer’s career graph. Once you attain the requisite knowledge and skills in software development, if you don’t put that knowledge and expertise to the test, they’ll be of little or no use. </p>
            <Link to={'/login'} className='btn btn-warning'>Start to Explore <i class="fa-solid fa-right-long fa-beat ms-2"></i></Link>
          </Col>

          <Col sm={12} md={6}>
            <img style={{marginTop:'100px'}} className='w-75' src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" />
            </Col>
        
        </Row>

       </div>

        {/* all projects */}
        <div className="all-projects mt-5">
          <h1 className='text-center'>Explore Our Projects</h1>
         <marquee scrollAmount={25}>
            <Row>
              <Col sm={6} md={7} lg={4}>
                <ProjectCard/>
                </Col>

            </Row>
         </marquee>
         <div className='text-center mt-5'><Link to={'/projects'}>View More Projects
         </Link>
         </div>
        </div>


    
    
    </>
  )
}

export default Home