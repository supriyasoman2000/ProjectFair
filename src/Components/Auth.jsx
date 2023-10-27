import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Auth({register}) {
  const isRegisterForm = register?true:false
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
       <div className='w-75 container'>
            <Link to={'/'} style={{textDecoration:'none',color:'#158cba',fontWeight:'bold'}}><i class="fa-solid fa-arrow-left me-1"></i>Back to Home</Link>
            <div  className="card shadow p-5 bg-warning">
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <img src="http://www.tropiqana.com/fundsmanager/app-assets/img/gallery/login.png" className='rounded-start w-100' alt="Auth Image" />
                </div>
                <div className='col-lg-6'>
                   <div className='d-flex  align-items-center flex-column'>
                   <h1 className='fw-bolder text-light mt-2'><i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h1>
                     <h5 className='fw-bolder mt-4 pb-3 text-light'>
                        {
                            isRegisterForm ? 'Sign Up to your Account' : 'Sign In to your Account'
                        }
                     </h5>

               <Form className='text-light w-100'>
                {
                    isRegisterForm &&
                    <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email ID" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicpassword">
                    <Form.Control type="password" placeholder="Enter Password" />
                  </Form.Group>

                  {
                    isRegisterForm ? 
                    <div>
                        <button style={{backgroundColor:'#158cba'}} className='btn btn-light mb-4'>Register</button>
                        <p>Already havan an Account? <Link to={'/login'} style={{fontWeight:'bold'}} >Login</Link></p>
                    </div> : 
                    <div>
                    <button style={{backgroundColor:'#158cba'}} className='btn btn-light mb-4'>Login</button>
                    <p>New User? <Link to={'/register'} style={{fontWeight:'bold'}}> Register</Link></p>
                </div>
                  }

               </Form>

                   </div>
                </div>

            </div>
            </div>
    
       </div>
    </div>
  )
}

export default Auth