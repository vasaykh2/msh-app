import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./navibar.scss";
import style from "styled-components";
import mailing from "../../images/mailing.ico";

const Styles = style.div`
a,.navbar-brand, .navbar-nav, .nav-link {
  color: #adb1b8;
  &:hover {
    color: white
  }
}
`;

const Navibar = () => {
  return (
    <>
      <Styles>
        <Navbar
          className="navbar-container"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container className="container">
            <Navbar.Brand className="brand">
              <img className="img-mailing" src={mailing} alt="Mailing" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Домой</Link>
                </Nav.Link>
                <Nav.Link>
                  <ScrollLink to="howItWork" smooth={true} duration={200}>
                    'Как это работает?'
                  </ScrollLink>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/builder">Возможности</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/#pricing">
                    Тарифы: div id="pr"
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <ScrollLink to="resources" smooth={true} duration={500}>
                    'Ресурсы: <div id="resources"></div>'
                  </ScrollLink>
                </Nav.Link>
              </Nav>
              <Nav>
                <Button variant="primary" className="me-2">
                  Вход
                </Button>
                <Button variant="primary">Регистрация</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
};

export default Navibar;
