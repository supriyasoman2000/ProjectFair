import React,{useState} from 'react'
import { Card,Modal,Row,Col } from 'react-bootstrap'
import projectpic from  '../Assets/pr1.png'

function ProjectCard() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <>

<Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={projectpic} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                <img style={{height:'200px'}} src={projectpic} className='img-fluid' alt="Project Image" />
                </Col>

                <Col md={6}>
                    <h2>Project Title</h2>
                    <p>Project Overview : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptate soluta. Facilis ab pariatur at ipsum cumque aliquid magnam asperiores beatae cupiditate, veniam eaque quibusdam saepe nihil numquam autem labore.</p>
                    <p>Language Used: <span className='fw-bolder'>HTML,CSS,React</span></p>
                </Col>
            </Row>
            <div className='mt-3'>
                <a href="https://github.com/supriyasoman2000/veedio-app" target='_blank' className='me-3 btn'> <i class="fa-brands fa-github fa-2x"></i></a>
            </div>

            <div className='mt-3'>
                <a style={{marginLeft:'100px',marginTop:'-110PX'}} href="https://supriya-mediaplayer.netlify.app" target='_blank' className='me-5  btn'> <i class="fa-solid fa-link fa-2x"></i> </a>
            </div>
        </Modal.Body>
      </Modal>
    
    </>
  )
}

export default ProjectCard