import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { IconContext } from "react-icons";

import Nav from './../Nav/Nav'
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
        <Nav/>
        <Profile />
        <div className={styles.contact}>
        <IconContext.Provider value={{ color: " #00e673", size: "5em" }}>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillMail />
        </IconContext.Provider>
      <Footer/>
        </div>

    </div>
  );
};

export default Home;
