'use client';
import React, { useState } from 'react';
import styles from '@/app/styles/navbar.module.scss';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={styles.navbarSection}>
      <div className={styles.navbarContainer}>


        <div className={styles.logo}>
          <Link href='/'> <img src="logo.png" alt="logo" /> </Link>
        </div>


        <div className={styles.nav}>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About Us</Link></li>
            <li><Link href='/services'>Services</Link></li>
            <li><Link href='/career'>Career</Link></li>
            <li><Link href='/contact'>Contact Us</Link></li>
          </ul>
        </div>


        <div className={styles.navBtn}>
          <p> Get Started </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
