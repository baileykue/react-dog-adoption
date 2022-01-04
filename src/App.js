import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink>Home</NavLink>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
