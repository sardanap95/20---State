/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Testimony from "./Testimony";
import Contact from "./Contact";

function Landing() {
  return (
    <Router>
      <main className="site-main">
        <Navbar />

        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route exact path="/testimonies" component={Testimony}></Route>
        <Route exact path="/contact" component={Contact}></Route>

        <Footer />
      </main>
    </Router>
  );
}

export default Landing;
