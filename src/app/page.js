import React from 'react'
import homeStyles from '@/app/page.module.scss'

const page = () => {
  return (
    <> 
    <div 
    className={homeStyles.homeSection} 
    style={{
      backgroundImage:"url('/bg.png')",
      backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}    
    >
      <div className={homeStyles.homeContainer}>

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
          <img src="about.png" alt="aboutImg" />
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
    </>
  )
}

export default page
