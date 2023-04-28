import React from 'react'
import About3 from '../components/About3'
import PlanetsAroundSun from '../components/3DContent'

const About = () => {
  return (
    <div>
      <div className='bg-black flex items-center justify-center h-screen py-24 min-w-fit'>
        <About3 />
      </div>
      <div>
        {/**<PlanetsAroundSun />*/}
      </div>
    </div>
  )
}

export default About