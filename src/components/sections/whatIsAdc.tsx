import React from 'react'
import InfoCard from '../ui/info-card'

const WhatIsAdc = () => {
  return (
    <section className='mt-15 scroll-mt-40' id='about'>
      <div className="relative flex items-center justify-center w-full my-8">
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 w-full z-0" />
        <h2 className="relative z-10 bg-white px-2 md:px-6 text-3xl md:text-5xl lg:text-6xl font-bold text-subheader">
          What is App Dev Club?
        </h2>
      </div>
      
      <div className='max-w-6xl mx-auto px-4 text-base md:text-lg text-center flex flex-col gap-12'>
        <p className='text-justify md:text-center'>
          App Dev Club <span className='font-extrabold'>bridges the gap</span> between talented students who lack industry experience
          and companies who need to hire talented software engineering candidates. Companies 
          want to identify the best talent, but traditional hiring methods sometimes fall short. The best way to find strong candidates is to give them a real problem to solve. Companies come to App Dev Club with projects that they want done, but might not have the bandwidth or resources to take on. We then form a team of undergraduate students who develop it over the course of the semester.
        </p>

        <div className='flex justify-around flex-col md:flex-row gap-5 lg:gap-10 xl:gap-20'>
          <InfoCard title='Bootcamp' description='Develop your technical skills, work with your mentor, and transition into project teams.'/>
          <InfoCard title='Projects' description='Gain valuable internship experience by working on a project with industry experts.'/>
          <InfoCard title='Startups' description='Work with startups to develop an innovative new product that solves real problems.'/>
        </div>
      </div>
    </section>
  )
}

export default WhatIsAdc