import './App.css';

import AppRouter from './AppRouter';
import ReactDOM from 'react-dom/client';

export default function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Farout</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/customers">Customers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/customerform">Customerform</a>
          </li>
        </ul>
      </div>
    </nav>
    <AppRouter /> 
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);