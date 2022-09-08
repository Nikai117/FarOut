import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./Pages/Customers";
import Customerform from "./Pages/CustomerForm";


 function AppRouter() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
          <Routes>
              <Route path ="/customers" element={<Customers />} />
              <Route path="/contactform" element={<Customerform />} />
          </Routes>
         </BrowserRouter>
        </header>
      </div>
    );
  }

  export default AppRouter;