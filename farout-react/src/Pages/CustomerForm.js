import React from 'react';

function CustomerForm() {
  return (
    <div class='d-flex'>    
    <form>
    <div class="mb-3">
      <label for="exampleInputname" class="form-label d-flex">Name</label>
      <input type="text" class="form-control" id="exampleInputname"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputLname" class="form-label d-flex">Last name</label>
      <input type="text" class="form-control" id="exampleInputLname"  />
    </div>
    <div class="mb-3">
      <label for="exampleInputBdate" class="form-label d-flex">Date of birth</label>
      <input type="date" class="form-control" id="exampleInputBdate" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPhone" class="form-label d-flex">Phone number</label>
      <input type="text" class="form-control" id="exampleInputPhone" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label d-flex">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label d-flex">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <button type="submit" class="btn btn-primary d-flex">Submit</button>
  </form>
  </div>
  )

}

export default CustomerForm