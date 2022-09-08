import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./Pages/Customers";
import Customerform from "./Pages/CustomerForm";
import AllCustomers from "./Pages/AllCustomers";
import Home from "./Pages/Home";


 function AppRouter() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
          <Routes>
              <Route path ="/" element={<Home />} />
              <Route path ="/customers" element={<Customers />} />
              <Route path="/contactform" element={<Customerform />} />
              <Route path="/allcustomers" element={<AllCustomers />} />
          </Routes>
         </BrowserRouter>
        </header>
      </div>
    );
  }

  export default AppRouter;