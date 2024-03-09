// home-page.jsx
import React from "react";
// import { Link, Route } from "react-router-dom";
import Layout from "../../components/layout/layout.jsx";
import Slider from "../../components/slider/slider";
import Pricing from "../../components/pricing/pricing.jsx";
import Resources from '../../components/resources/resources.jsx';
// import Footer from "../footer/footer";

import "./home-page.scss";

const HomePage = () => {
  return (
    <Layout>
      <Slider />
      <section>
        <h2>Дополнительный контент HomePage</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          modi reprehenderit. Eveniet nostrum ducimus quas quod ullam.
        </p>
      </section>
      <section>
        <Pricing />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          modi reprehenderit. Eveniet nostrum ducimus quas quod ullam.
        </p>
      </section>
      <section>
        <Resources />
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
