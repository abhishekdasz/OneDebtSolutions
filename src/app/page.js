import React from 'react'
import homeStyles from '@/app/page.module.scss'

const page = () => {
  return (
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

    // about section starts here
    
    // about section ends here
  )
}

export default page
