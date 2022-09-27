/* import React from "react";
import axios from "axios";
import CityList from "../components/MainSection/city-list.js";
import "./css/form.css";

function TripsForm() {
  const submitHandler = (event) => {
    event.preventDefault();
    var city_select = event.target.city_select;
    var city_option = city_select.options;
    console.log(city_select.options[city_select.id]);
    const number_of_days = event.target.number_of_days.value;
    const departure_date = event.target.departure_date.value;
    const data = {
      number_of_days,
      departure_date,
    };
    axios
      .post("http://127.0.0.1:8000/api/trips", data)
      .then((response) => {
        console.log(response);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
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
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Add trips</h3>
              <form
                name="registration"
                id="registrationform"
                onSubmit={submitHandler}
              >
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label htmlFor="city" className="form-label d-flex">
                        City *
                      </label>
                      <CityList />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <label htmlFor="days" className="form-label d-flex">
                        Number of days *
                      </label>
                      <input
                        type="text"
                        className="form-control "
                        name="number_of_days"
                        required
                        id="days"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="departure_date" className="form-label d-flex">
                    Date of departure *
                  </label>
                  <input
                    type="date"
                    className="form-control d-flex"
                    id="departure_date"
                    required
                    name="departure_date"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <div className="form-outline">
                    <label htmlFor="price" className="form-label d-flex">
                      Price *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      required
                      id="price"
                    />
                  </div>
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

export default TripsForm;
 */
