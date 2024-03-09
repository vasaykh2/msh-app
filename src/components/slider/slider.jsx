import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/1-047.jpg";
import img2 from "../../images/2-a009.jpg";
import img3 from "../../images/3-052a85dbc4007e03efbc0963c0888fe269334795.png";

import "./slider.scss";

const Slider = () => {
  return (
    <div id="howItWork">
      <h1>Как это работает?</h1>
      <p>Сервис рассылки любому числу получателей</p>
      <Carousel>
        <Carousel.Item className="carousel-item">
          <img className="imaging d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>MSHApp</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Carousel.Caption>
          <div>djn</div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="imaging d-block w-100" src={img2} alt="First slide" />
          <Carousel.Caption>
            <h3>MSHApp</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Carousel.Caption>
          <div>djn</div>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="imaging d-block w-100" src={img3} alt="First slide" />
          <Carousel.Caption>
            <h3>MSHApp</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Carousel.Caption>
          <div>djn</div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
