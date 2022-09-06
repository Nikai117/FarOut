import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Customers from "./Pages/Customers";
import Customerform from "./Pages/CustomerForm";



export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Customers />} />
            <Route path="customerform" element={<Customerform />} />
          </Route>
        </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);