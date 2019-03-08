import React from "react";
import NavBar from "./NavBar/Header";
import Slider from "./Slider/Slider"

export default class Example extends React.Component {


  render() {
    return (
        <div>
        <NavBar/>,
            <Slider></Slider>
        </div>
        )
    }
}
