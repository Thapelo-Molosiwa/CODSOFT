// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} ${styles.fixed}`}>
      <ul className={styles.navList}>
        <li className={styles.heee}>
          <Link to="/">Home</Link>
        </li>
        <div className={styles.pee}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
