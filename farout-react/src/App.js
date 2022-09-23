import "./App.css";
import AppRouter from "./AppRouter";
//import Footer from '../src/components/MainSection/index';

export default function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Farout
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/allcustomers">
                All Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/customerform">
                Customerform
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/allcities">cities</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <AppRouter />
    </div>
  );
}
