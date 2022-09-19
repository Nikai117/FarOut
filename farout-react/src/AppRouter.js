import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customerform from "./Pages/CustomerForm";
import AllCustomers from "./Pages/AllCustomers";
import Home from "./Pages/Home";
import Customer from "./Pages/Customer";


  export default function AppRouter() {
    return (
      <div className="AppMain">
      <BrowserRouter>
      <Routes>
          <Route path ="/" element={<Home />} />
          <Route path="/allcustomers" element={<AllCustomers />} />
          <Route path="/CustomerForm" element={<Customerform />} />
          <Route path="/Customer/${id}" element={<Customer />} />
      </Routes>
     </BrowserRouter>
      </div>
    );

  }

