import React from 'react';
import './css/form.css';

function CustomerForm() {
  return (
    <div className='d-flex justify-content-center'>    
    <form>
    <div className="mb-3">
      <label htmlFor="exampleInputname" className="form-label d-flex">Name</label>
      <input type="text" className="form-control" id="exampleInputname"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputLname" className="form-label d-flex">Last name</label>
      <input type="text" className="form-control" id="exampleInputLname"  />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputAdress" className="form-label d-flex">Address</label>
      <input type="text" className="form-control" id="exampleInputAdress"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPcode" className="form-label d-flex">Postal code</label>
      <input type="text" className="form-control" id="exampleInputPcode"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputCity" className="form-label d-flex">City</label>
      <input type="text" className="form-control" id="exampleInputCity"/>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputPhone" className="form-label d-flex">Phone number</label>
      <input type="text" className="form-control" id="exampleInputPhone" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label d-flex">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" className="btn btn-primary d-flex">Submit</button>
  </form>
  </div>
  )

}

export default CustomerForm