// layout.jsx
import React from "react";
import Navibar from "../navibar/navibar";
// import Footer from '../footer/footer';

import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navibar />
      <main className={styles.page}>
      {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
