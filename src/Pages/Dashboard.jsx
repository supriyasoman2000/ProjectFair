import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Profile from '../Components/Profile'
import MyProjects from '../Components/MyProjects'

function Dashboard() {
  return (
    <div>
      <Header insideDashboard/>
       <Row style={{marginTop:'100px'}} className='container-fluid'>
        <Col sm={12} md={8}>
          {/* my project */}
          <h1>Welcome <span className='text-warning'>User</span></h1>
          <MyProjects/>
        </Col>

        <Col sm={12} md={4}>
          {/* my profile */}
           <Profile/>
          </Col>
       </Row>
       
    </div>
  )
}

export default Dashboard