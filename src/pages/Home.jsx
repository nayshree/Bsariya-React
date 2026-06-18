import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'
import AboutSection from '../components/AboutSection'
import StateSection from '../components/StateSection'
import TeamSection from '../components/TeamSection'

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSlider/>
      <AboutSection/>
      <StateSection/>
      <TeamSection/>
      <Footer/>
    </div>
  )
}