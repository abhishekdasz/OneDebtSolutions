import React from 'react'
import homeStyles from '@/app/styles/contact.module.scss'
import { CgArrowTopRight } from "react-icons/cg";
import Link from 'next/link';

const page = () => {
  return (
    <div className={homeStyles.footerSection}
    style={{
      backgroundImage:"url('/bg.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
    >
        <div className={homeStyles.footerContainer}>
          <div className={homeStyles.leftFooter}>
            <h4> Navigating Risk Management in Financial Solutions Effectively: Expert Tips for Success </h4>
            {/* <h4> Understanding Risk Management in High-Yield Investment Programs Investments: Tips for Success </h4> */}
            <h2> Let&apos;s Chat <CgArrowTopRight /> </h2> 
            <div className={homeStyles.footerShape}> <img src="shape8.png" alt="shape8" /> </div>
            <div className={homeStyles.footerBg}> <img src="shape9.png" alt="shape9" /> </div>
            <p> OneDebt © 2024, All Rights Reserved </p>
          </div>

          <div className={homeStyles.midFooter}>
            <li> <Link href='/'> About Us </Link> </li>
            <li> <Link href='/'> Services </Link> </li>
            <li> <Link href='/'> Career </Link> </li>
            <li> <Link href='/'> Contact Us </Link> </li>
          
          </div>

          <div className={homeStyles.rightFooter}> 
            <h4> onedebtbbsr@gmail.com </h4>
            <div>
              <h6> Plot No-940, Old Town </h6>
              <h6> Lewis Road, Bhubaneswar </h6>
              <h6> Odisha, 751002 </h6>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page
