import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import img1 from "../../images/1-047.jpg";

import "./pricing.scss";

const Pricing = () => {
  return (
    <div id="pricing">
      <h1>Тарифы</h1>
      <Container className="container-container">
        <Row className="row-row">
          <Col className="col-col">
            <Card className="card">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Free</Card.Title>
                <Card.Text>
                  <h2><span>₽ 0</span>/ всегда</h2>
                  <p>Количество писем 500</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus pariatur corporis inventore modi recusandae? Sunt, at. Quam odit porro, tenetur maiores molestiae voluptatibus adipisci repellendus esse delectus facilis deleniti!</p>
                </Card.Text>
                <Button variant='primary'>Выбрать</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-col">
            <Card className="card">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Free</Card.Title>
                <Card.Text>
                  <h2><span>₽ 0</span>/ всегда</h2>
                  <p>Количество писем 500</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus pariatur corporis inventore modi recusandae? Sunt, at. Quam odit porro, tenetur maiores molestiae voluptatibus adipisci repellendus esse delectus facilis deleniti!</p>
                </Card.Text>
                <Button variant='primary'>Выбрать</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-col">
            <Card className="card">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Free</Card.Title>
                <Card.Text>
                  <h2><span>₽ 0</span>/ всегда</h2>
                  <p>Количество писем 500</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus pariatur corporis inventore modi recusandae? Sunt, at. Quam odit porro, tenetur maiores molestiae voluptatibus adipisci repellendus esse delectus facilis deleniti!</p>
                </Card.Text>
                <Button variant='primary'>Выбрать</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
