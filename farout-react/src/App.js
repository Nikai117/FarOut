import './App.css';
import AppRouter from './AppRouter';
//import Footer from '../src/components/MainSection/index';


export default function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Farout</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
          <a className="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
          <a className="nav-link" href="http://localhost:3000/customerform">Customerform</a>
          </li>
          <li class="nav-item">
          <a className="nav-link" href="http://localhost:3000/allcustomers">All Customers</a>
          </li>
        </ul>
      </div>
    </nav>
    <AppRouter /> 
    </div>
  );
}