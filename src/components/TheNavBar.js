import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const TheNavBar = (props) => {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">Movie-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Sort by..." id="basic-nav-dropdown" as="select">
            <NavDropdown.Item
              href="#"
              onClick={() => props.handleChange("fname")}
            >
              First name
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#1"
              onClick={() => props.handleChange("lname")}
            >
              Last name
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#2"
              onClick={() => props.handleChange("age")}
            >
              Age
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="#3"
              onClick={() => props.handleChange("rnd")}
            >
              Random order
            </NavDropdown.Item>
          </NavDropdown>{" "}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Filter" className="mr-sm-2" />
          <Button variant="outline-success">Filter</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheNavBar;
