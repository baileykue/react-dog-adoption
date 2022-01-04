import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import DogList from './components/DogList/DogList';
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
            <DogList />
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
