import React, { useState } from "react";
import { Navbar, Nav, Button, Container, Modal, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
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
  const [showModal, setshowModal] = useState(false);
  const handleCloseModal = () => setshowModal(false);
  const handleShowModal = () => setshowModal(true);

  const navigate = useNavigate();

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
          <Container className="container-container">
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
                  <ScrollLink to="howItWork" smooth={true} duration={220}>
                    Как это работает?
                  </ScrollLink>
                </Nav.Link>
                <Nav.Link>
                  <ScrollLink to="pricing" smooth={true} duration={220}>
                    Тарифы
                  </ScrollLink>
                </Nav.Link>
                <Nav.Link>
                  <ScrollLink to="resources" smooth={true} duration={220}>
                    Ресурсы
                  </ScrollLink>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/builder">Возможности</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={handleShowModal}
                >
                  Вход
                </Button>
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={() => navigate("/signup")}
                >
                  Регистрация
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Вход</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navibar;
