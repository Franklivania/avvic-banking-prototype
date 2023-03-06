import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import SectionOne from '../../Components/SectionOne/SectionOne'
import SectionThree from '../../Components/SectionThree/SectionThree'
import SectionTwo from '../../Components/SectionTwo/SectionTwo'
import SectionFour from '../../Components/SectionFour/SectionFour'
import Footer from '../../Components/Footer/Footer'

const Landing = () => {

  return (
    <div>
        <Navbar />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
    </div>
  )
}

export default Landing