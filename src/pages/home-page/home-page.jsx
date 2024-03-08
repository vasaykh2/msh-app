// home-page.jsx
import React from "react";
// import { Link, Route } from "react-router-dom";
import Layout from "../../components/layout/layout.jsx";
import Slider from "../../components/slider/slider";
// import Footer from "../footer/footer";

import "./home-page.scss";

const HomePage = () => {
  return (
    <Layout>
      <h1>Сервис рассылки любому числу получателей</h1>
      <Slider />
      <section>
        <h2>Дополнительный контент HomePage</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          modi reprehenderit. Eveniet nostrum ducimus quas quod ullam.
        </p>
      </section>
      {/* <Footer /> */}
    </Layout>
  );
};

export default HomePage;
