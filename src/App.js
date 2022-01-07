import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllDogs from './views/AllDogs/AllDogs';
import Dog from './views/Dog/Dog';
import DogEdit from './views/DogEdit/DogEdit';
import Header from './components/Header/Header';
import Admin from './views/Admin/Admin';
import background from './background.png';
import './App.css';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/">
            <AllDogs />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/dogs/:id/edit">
            <DogEdit />
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
