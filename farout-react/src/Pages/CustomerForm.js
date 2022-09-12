import React from 'react';

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
      <label htmlFor="exampleInputBdate" className="form-label d-flex">Date of birth</label>
      <input type="date" className="form-control" id="exampleInputBdate" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPhone" className="form-label d-flex">Phone number</label>
      <input type="text" className="form-control" id="exampleInputPhone" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label d-flex">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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