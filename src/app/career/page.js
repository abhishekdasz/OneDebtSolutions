import React from 'react'

const page = () => {
  return (
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
            <h2> We&apos;re Hiring! </h2>
            <h2> Join Our Team Today. </h2>
          </div>
          <div className={homeStyles.joinBtn}> Join Now </div>

          <div className={homeStyles.patternLayer}>
            <img src="shape6.png" alt="shape6" />
            <img src="shape7.png" alt="shape7" />
            <img src="shape8.png" alt="shape8" />
            {/* <img src="shape9.png" alt="shape2" /> */}
          </div>
        </div>
        <div className={homeStyles.figures}>
          <div className={homeStyles.figuresContainer}>
            <div className={homeStyles.figure}>
              <div>
                <span>100</span>
                <span>%</span>
              </div>
              <p> Customer Satisfaction </p>
            </div>
            <div className={homeStyles.figure}>
              <div>
                <span>5</span>
                <span>+</span>
              </div>
              <p> Community Partners </p>
            </div>
            <div className={homeStyles.figure}>
              <div>
                <span>80</span>
                <span>%</span>
              </div>
              <p> Successful Settlements </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default page
