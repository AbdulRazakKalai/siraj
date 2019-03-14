import React from "react";
import NavBar from "./NavBar/Header";
import DemoCarousel from "./Slider/Slider";
import MainSec from "./Main/Main";
import Footer from "./Footer/Footer";
import AboutUs from "./Aboutus/About_us";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <NavBar />,
        <DemoCarousel />,
        <MainSec />,
        <Footer />
      </div>
    );
  }
}
const routing = (
  <Router>
    <div>
      <Route path="/" exact component={Example} />
      <Route
        path="/About"
        exact
        render={props => (
          <div>
            <NavBar />,
            <DemoCarousel />,
            <AboutUs />,
            <Footer />
          </div>
        )}
      />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
