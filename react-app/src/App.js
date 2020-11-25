import "./App.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import About from "./about";
import Shop from "./shop";
import Nav from "./nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
      </div>
    </Router>
  );
}

export default App;
