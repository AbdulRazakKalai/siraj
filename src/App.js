import React from "react";
import NavBar from "./NavBar/Header";
import DemoCarousel from "./Slider/Slider";
import MainSec from "./Main/Main";
import Footer from "./Footer/Footer";

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
