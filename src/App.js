import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import AllDogs from './views/AllDogs/AllDogs';
import Dog from './views/Dog/Dog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink exact to="/">
            Home
          </NavLink>
        </header>

        <Switch>
          <Route exact path="/">
            <AllDogs />
          </Route>
          <Route path="/dogs/:id">
            <Dog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
