import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (


            <div>
                <div className = "TopBar">
                    <div className="top_phone">Call us: +971 6 5210039</div>

                    <div className="top_email">

                        <a href="mailto:alsaadsat@gmail.com">alsaadsat@gmail.com</a>
                    </div>
                </div>


                <Navbar color="light" light expand="md">
                    <img className="dark_logo desktop_logo" src="http://alsaaduae.com/wp-content/uploads/2019/01/alsaad-logo.png"
                         alt="http://alsaaduae.com/" title="http://alsaaduae.com/">

                    </img>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Clients</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Career</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
