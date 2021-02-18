import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import PageWrapper from './Components/PageWrapper';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Portfolio from './Components/Common/Portofolio';
import Team from './Components/Common/Team';
import Services from './Components/Common/Services';


class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
            <Route
              exact={true}
              path="/"
              component={Home}
            />
            <Route
              path="/about"
              component={About}
            />
            <Route
              path="/contact"
              component={Contact}
            />
            <Route
            path="/portfolio"
            component={Portfolio}/>
            <Route
            path="/team"
            component={Team}/>
            <Route
            path="/services"
            component={Services}/>

        </PageWrapper>
      </Router>
    );
  }
}

export default App;
