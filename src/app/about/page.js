import React from 'react'
import homeStyles from '@/app/styles/about.module.scss'

const page = () => {
  return (
    <div className={homeStyles.aboutSection}
        style={{
          backgroundImage:"url('/bg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          overflow:'hidden'
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
  )
}

export default page
