import React from "react";
import { Row, Col } from "reactstrap";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
      <div className="footer">
        <Row>
          <Col sm="3">
            <h2>CLIENTS</h2>
            <ul className="footerlistyle">
              <li>
              Accessibility 
              </li>
              Accessibility 
              <li>
              Accessibility 
              </li>
            </ul>
             </Col>
          <Col sm="3">
            <h2>PRODUCTS</h2>
            <ul className="footerlistyle">
             <li>
              Accessibility 
              </li>
              Accessibility 
              <li>
              Accessibility 
              </li>
            </ul>
          </Col>
          <Col sm="3">
            <h2>SERVICES</h2>
            <ul className="footerlistyle">
             <li>
              Accessibility 
              </li>
              Accessibility 
              <li>
              Accessibility 
              </li>
            </ul>
          </Col>
          <Col sm="3">
          <h2>CAREER</h2>
          <ul className="footerlistyle">
          <li>
              Accessibility 
              </li>
              Accessibility 
              <li>
              Accessibility 
           </li>
            </ul>
          </Col>
        </Row>
        </div>
       <div className="footerlistylefooter">
       <ul className = "displayli">
     <li>
     <a href="#">
      Footer 
      </a>
      </li>
      <li>
      <a href="#">
      Footer 
      </a>
      </li>
      <li>
      <a href="#">
      Footer 
      </a>
      </li>
      <li>
      <a href="#">
      Footer 
      </a>
      </li>
      <li>
      <a href="#">
      <i className="fa fa-facebook"></i>
      </a>
      </li>
     </ul>
    </div>
   </div>
     
    );
  }
}
