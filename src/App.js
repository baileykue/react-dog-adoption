import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import AllDogs from './views/AllDogs/AllDogs';
import Dog from './views/Dog/Dog';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

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
