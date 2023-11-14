import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
  return (
    <div className='card shadow p-3 mt-3'>
       <div className='d-flex'>
        <h4> MyProjects</h4>
        <div className="ms-auto"> <AddProject/></div>
         </div>
         <div className='mt-4'>
            {/* collection of user projects */}
            <div className="border d-flex align-items-center rounded p-2">
                <h5>Project Title</h5>
                <div className="icon ms-auto">
                    <button className="btn"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className="btn"><i class="fa-brands fa-github"></i></button>
                    <button className="btn"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            <p className="text-danger fw-bolder fs-5 mt-4">No Projects Uploaded Yet!!!</p>
         </div>
        </div>
  )
}

export default MyProjects