import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "toaster-js/default.scss";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
