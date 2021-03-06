import './App.css';
import Login from './components/Login';
import ItemsTable from './components/ItemsTable';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>

        <Switch>
          <Route path="/list">
            <ItemsTable />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
