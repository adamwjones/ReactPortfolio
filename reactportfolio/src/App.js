import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer"



function App() {
  return (
    <div className="App">
    <Router>
    <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
    <Footer />
    </Router>
      </div>
  );
}



export default App;