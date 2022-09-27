import React from "react";
import axios from "axios";
import "./css/form.css";

function CustomerForm() {
  const submitHandler = (event) => {
    event.preventDefault();
    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const email = event.target.email.value;
    const address = event.target.address.value;
    const postal_code = event.target.postal_code.value;
    const city = event.target.city.value;
    const country_code = event.target.country_code.value;
    const phone = event.target.phone.value;
    const data = {
      first_name,
      last_name,
      email,
      address,
      postal_code,
      city,
      country_code,
      phone,
    };
    axios
      .post("http://127.0.0.1:8000/api/register", data)
      .then((response) => {
        console.log(response);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
        console.log(last_name);
      });
  };
  return (
    <div className="container py-5 h-100% w-100% ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6">
          <div className="card rounded-3">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
              className="w-100"
              alt="Sample photo"
            />
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                Customer registration
              </h3>
              <form
                name="registration"
                id="registrationform"
                onSubmit={submitHandler}
              >
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label
                        htmlFor="exampleInputname"
                        className="form-label d-flex"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        className="form-control "
                        name="first_name"
                        required
                        id="exampleInputname"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label
                        htmlFor="exampleInputLname"
                        className="form-label d-flex"
                      >
                        Last name *
                      </label>
                      <input
                        type="text"
                        className="form-control "
                        name="last_name"
                        required
                        id="exampleInputLname"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label d-flex"
                  >
                    Email address *
                  </label>
                  <input
                    type="email"
                    className="form-control d-flex"
                    id="exampleInputEmail1"
                    required
                    name="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label
                        htmlFor="exampleInputAdress"
                        className="form-label d-flex"
                      >
                        Address *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        required
                        id="exampleInputAdress"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label
                        htmlFor="exampleInputPcode"
                        className="form-label d-flex"
                      >
                        Postal code *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="postal_code"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3"></div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label
                        htmlFor="exampleInputCity"
                        className="form-label d-flex"
                      >
                        Country code *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="country_code"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label
                        htmlFor="exampleInputLname"
                        className="form-label d-flex"
                      >
                        City *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="city"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPhone"
                    className="form-label d-flex"
                  >
                    Phone number *{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="phone"
                    id="exampleInputPhone"
                  />
                </div>

                <button
                  type="submit"
                  id="sendregistrationbutton"
                  className="btn btn-primary d-flex"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
