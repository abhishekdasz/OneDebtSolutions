import React from 'react'
import homeStyles from '@/app/page.module.scss'
import Link from 'next/link';
import { CgArrowTopRight } from "react-icons/cg";

const page = () => {
  return (
    <> 
    {/* homePage starts here */}
    <div 
    className={homeStyles.homeSection} 
    style={{
      backgroundImage:"url('/bg.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}    
    >
      <div className={homeStyles.homeContainer}>

        {/* <div className={homeStyles.bgOne}> <img src="shape2.png" alt="bg" /> </div> */}
        <div className={homeStyles.bgTwo}> <img src="shape9.png" alt="bg" /> </div>

        <div className={homeStyles.contentBox}>
          <span className={homeStyles.subTitle}> Trusted Company </span>
          <h2> Expertise, Trust, & Your Financial Growth </h2>
          <div className={homeStyles.buttonBox}> GET STARTED </div>
        </div>

        <div className={homeStyles.shapeRotate}>
          <img src="shape.png" alt="shape" />
        </div>

      </div>
    </div>
    {/* homePage endss here */}







    {/* aboutPage starts here */}
    <div className={homeStyles.aboutSection}
        style={{
          backgroundImage:"url('/bg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }} 
    >
      <div className={homeStyles.aboutContainer}>
        <div className={homeStyles.leftAbout}>
          <div className={homeStyles.floatImg}>
            <img src="about.png" alt="aboutImg" />
          </div>
          <div className={homeStyles.rotateShape}>
            <img src="shape4.png" alt="shape4" />
          </div>
          <div className={homeStyles.shapeFive}>
            <img src="shape5.png" alt="shape5" />
          </div>
        </div>

        <div className={homeStyles.blurBg}>
          <img src="shape2.png" alt="shape2" />
        </div>

        <div className={homeStyles.zoomFade}>
          <img src="shape3.png" alt="shape3" />
        </div>




        <div className={homeStyles.rightAbout}>
          <div className={homeStyles.aboutContents}>
            <span className={homeStyles.subTitle}> About Us </span>
            <h2> Integrity, Transparency, and Investor Satisfaction </h2>
            <p> At One Debt Solutions, we offer comprehensive debt collection services, including early-stage collections, overdue account management, and recovery solutions. Our expertise spans various industries, allowing us to deliver customized strategies that maximize recovery rates for our clients. With a commitment to compliance and ethical practices, we handle each case with diligence and respect. </p>
          </div> 
        </div>


      </div>
    </div>
    {/* aboutPage ends here */}





    {/* joinUsPage starts here */}
    <div className={homeStyles.joinUsSection}
    style={{
      backgroundImage:"url('/bg.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
    >
      <div className={homeStyles.joinUsContainer}>
        <div className={homeStyles.contentsJoinUs}>
          <div className={homeStyles.hiringBanner}>
            <h2> We're Hiring! </h2>
            <h2> Join Our Team Today. </h2>
          </div>
          <div className={homeStyles.joinBtn}> Join Now </div>

          <div className={homeStyles.patternLayer}>
            <img src="shape6.png" alt="shape6" />
            <img src="shape7.png" alt="shape7" />
            <img src="shape8.png" alt="shape8" />
            <img src="shape9.png" alt="shape2" />
          </div>
        </div>
        <div className={homeStyles.figures}>
          <div className={homeStyles.figuresContainer}>
            <div className={homeStyles.figure}>
              <div>
                <span> 100 </span>
                <span> % </span>
              </div>
              <p> Customer Satisfaction </p>
            </div>
            <div className={homeStyles.figure}>
              <div>
                <span> 100 </span>
                <span> % </span>
              </div>
              <div> Customer Satisfaction </div>
            </div>
            <div className={homeStyles.figure}>
              <div>
                <span> 100 </span>
                <span> % </span>
              </div>
              <div> Customer Satisfaction </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    {/* joinUsPage ends here */}    


    {/* FooterPage starts here */}
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
            <h2> Let's Chat <CgArrowTopRight /> </h2> 
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
    {/* FooterPage ends here */}
    </>
  )
}

export default page
