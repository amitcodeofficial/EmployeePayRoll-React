import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./component/dashboard-component/Dashboard";
import Registration from "./component/registration-component/Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/register/:id" component={Registration}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
