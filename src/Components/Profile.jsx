import React,{useState} from 'react'
import { Collapse } from 'react-bootstrap'


function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div className='shadow mt-5' style={{marginBottom:'30px'}}>
        <div className='d-flex border rounded p-3 justify-content-between'> 
           <h2> My Profile</h2>
           <button  onClick={() => setOpen(!open)} className="btn btn-outline-info"><i class="fa-solid fa-chevron-down fa-beat-fade"></i></button>
        </div> 
       <Collapse in={open}>
            <div className="row  p-5  justify-content-center mt-3">
                {/* upload picture */}
                <label className='text-center'>
                    <input style={{display:'none'}} type="file" />
                    <img width={'200px'} height={'200px'} className='rounded-circle' src="https://img.freepik.com/premium-vector/portrait-caucasian-woman-avatar-female-person-vector-icon-adult-flat-style-headshot_605517-26.jpg?size=626&ext=jpg" alt="picture" />
                </label>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='GitHub' />
                </div>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='LinkedIn' />
                </div>
                <div className='mt-3 text-center d-grid'>
                    <button className='btn btn-warning'>Update</button>
                </div>
            </div>
       </Collapse>
    </div>
  )
}

export default Profile