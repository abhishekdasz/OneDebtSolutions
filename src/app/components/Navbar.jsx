'use client';
import React, { useState } from 'react';
import styles from '@/app/styles/navbar.module.scss';
import { MdClose, MdDarkMode, MdMenu } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Link from 'next/link';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  
  return (
    <div className={styles.navbarSection}>
      <div className={styles.navbarContainer}>


        <div className={styles.logo}>
          <Link href='/'> <img src="logo.png" alt="logo" /> </Link>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          { menuOpen ? <MdClose size={42}/> : <MdMenu size={42}/> } 
        </div>
        
        <div className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <ul>
            <li onClick={toggleMenu}><Link href='/'>Home</Link></li>
            <li onClick={toggleMenu}><Link href='/about'>About Us</Link></li>
            <li onClick={toggleMenu}><Link href='/'>Services</Link></li>
            <li onClick={toggleMenu}><Link href='/career'>Career</Link></li>
            <li onClick={toggleMenu}><Link href='/contact'>Contact Us</Link></li>
          </ul>
        </div>


        <div className={styles.navBtn}>
          <p> GET STARTED </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
