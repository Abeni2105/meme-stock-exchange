import React from "react"
// import { Link } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"
import styled from "styled-components"
import logo from "../assets/profile.png"

const Styles = styled.div`
  .profile {
    height: 3.4em;
  }

  a,
  .navbar-collapse .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: teal;
    }
  }
`

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="true" bg="dark" variant="dark">
      {/* <Navbar.Brand href="/">MemExchange</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav.Item>
        <Navbar.Brand href="">MemeExchange</Navbar.Brand>
      </Nav.Item>
      <Nav.Item>
        <img className="profile" src={logo} alt="" />
      </Nav.Item>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link>Hi user</Nav.Link>
          <Nav.Link href="/bought">My memes</Nav.Link>
          <Nav.Link href="/market">Market</Nav.Link>
          <Nav.Link href="/ranking">Rating</Nav.Link>
          <Nav.Link href="/memes">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
