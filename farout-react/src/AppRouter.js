import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customerform from "./Pages/CustomerForm";
import AllCustomers from "./Pages/AllCustomers";
import Home from "./Pages/Home";


  export default function AppRouter() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
          <Routes>
              <Route path ="/" element={<Home />} />
              <Route path="/CustomerForm" element={<Customerform />} />
              <Route path="/allcustomers" element={<AllCustomers />} />
          </Routes>
         </BrowserRouter>
        </header>
      </div>
    );
  }

