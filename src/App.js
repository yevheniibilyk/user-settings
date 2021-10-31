import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UsersPage from './components/UsersPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <UsersPage />
          </Route>
          {/*<Route path="/user/:id">*/}
          {/*  <About />*/}
          {/*</Route>*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
