import React from 'react';

function CustomerForm() {
  return (
    <div class='d-flex'>    
    <form>
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