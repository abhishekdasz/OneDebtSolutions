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

        <div className={homeStyles.homeLeft}>
          <div className={homeStyles.description}>
            <h1> OneDebt Solutions </h1>
            <p> At One Debt Solutions, we offer comprehensive debt collection services, including early-stage collections, overdue account management, and legal recovery solutions. Our expertise spans various industries, allowing us to deliver customized strategies that maximize recovery rates for our clients. With a commitment to compliance and ethical practices, we handle each case with diligence and respect. </p>
            <button> Explore </button>
          </div>
        </div>

        <div className={homeStyles.homeRight}>
          <img src="home.png" alt="home" />
        </div>
      </div>
    </div>
  )
}

export default page
