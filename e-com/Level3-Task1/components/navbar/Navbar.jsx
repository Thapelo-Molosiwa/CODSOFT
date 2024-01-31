// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../navbar/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} ${styles.fixed}`}>
      <ul className={styles.navList}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
