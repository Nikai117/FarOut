import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customerform from "./Pages/CustomerForm";
import AllCustomers from "./Pages/AllCustomers";
import Home from "./Pages/Home";
import Customer from "./Pages/Customer";
import Login from "./Pages/Login";


  export default function AppRouter() {
    return (
      <main>
        <aside id="asideleft" className="open" ></aside>
      <div className="AppMain overflow-auto vw-100">
      <BrowserRouter>
      <Routes>
          <Route path ="/" element={<Home />} />
          <Route path="/allcustomers" element={<AllCustomers />} />
          <Route path="/CustomerForm" element={<Customerform />} />
          <Route path="/customer/:id" element={<Customer />} />
          <Route path="/Login" element={<Login />} />
      </Routes>
     </BrowserRouter>
      </div>
      </main>
    );
  }