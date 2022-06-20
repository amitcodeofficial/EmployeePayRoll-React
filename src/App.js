import "./App.css";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Dashboard from './component/dashboard-component/Dashboard';

function App() {
  return(
  <Router>
  <div className="App">
    <Route path="/" component={Dashboard}></Route>
  </div>
  </Router>
  );
}

export default App;
