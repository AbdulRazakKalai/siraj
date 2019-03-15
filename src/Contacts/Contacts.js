import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class Forms extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57800.423655951774!2d55.09964342009251!3d25.11788565262809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f152a683c0d79%3A0x546802ab643feb7f!2sThe+Palm+Jumeirah+-+Dubai+-+United+Arab+Emirates!5e0!3m2!1sen!2sin!4v1552646881691"
              width="600"
              height="450"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    );
  }
}
