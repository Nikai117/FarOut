import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customerform from "./Pages/CustomerForm";
import AllCustomers from "./Pages/AllCustomers";
import Home from "./Pages/Home";
import Customer from "./Pages/Customer";
import Login from "./Pages/Login";
import "./App.css";

export default function AppRouter() {
  return (
    <main>
      {/*     <aside id="asideleft" className="open"></aside> */}
      <div className="AppMain overflow-auto vw-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allcustomers" element={<AllCustomers />} />
            <Route path="/CustomerForm" element={<Customerform />} />
            <Route path="/Customer/${id}" element={<Customer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "rgb(20 24 32)" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Countries of destination
                  </h6>
                  <p className="text-white">Denmark </p>
                  <p className="text-white">Greece</p>
                  <p className="text-white">Great britain</p>
                  <p className="text-white">Spain</p>
                  <p className="text-white">Finland</p>
                  <p className="text-white">Italy</p>
                  <p className="text-white">Netherlands</p>
                  <p className="text-white">Norway</p>
                  <p className="text-white">Sweden</p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Farout
                  </h6>
                  <p>We are Farout a travel agency based in Europe</p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> Zwolle, Zuidbuurtseweg
                    155, NL
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> farout@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> 06-60981111
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a className="text-white" href="/">
              Farout.com
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
