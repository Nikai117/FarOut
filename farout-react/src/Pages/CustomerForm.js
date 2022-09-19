import React from 'react';
import './css/form.css';

function CustomerForm() {
  return (
<div className="container py-5 h-100% w-100% ">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-lg-8 col-xl-6">
      <div className="card rounded-3">
         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
          className="w-100"
          alt="Sample photo" /> 
        <div className="card-body p-4 p-md-5">
          <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>   
      <form>
      <div className='row'> 
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label htmlFor="exampleInputname" className="form-label d-flex">Name</label>
            <input type="text" className="form-control form-control-lg" id="exampleInputname"/>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label htmlFor="exampleInputLname" className="form-label d-flex">Last name</label>
            <input type="text" className="form-control form-control-lg" id="exampleInputLname"  />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label d-flex">Email address</label>
        <input type="email" className="form-control d-flex" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className='row'> 
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label htmlFor="exampleInputAdress" className="form-label d-flex">Address</label>
            <input type="text" className="form-control" id="exampleInputAdress"/>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <label htmlFor="exampleInputPcode" className="form-label d-flex">Postal code</label>
            <input type="text" className="form-control" id="exampleInputPcode"/>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputCity" className="form-label d-flex">City</label>
        <input type="text" className="form-control" id="exampleInputCity"/>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPhone" className="form-label d-flex">Phone number</label>
        <input type="text" className="form-control" id="exampleInputPhone" />
      </div>
      <button type="submit" className="btn btn-primary d-flex">Submit</button>
    </form>
    </div>
    </div>
    </div>
    </div>
  </div>
  )

}

export default CustomerForm