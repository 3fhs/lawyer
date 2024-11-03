import React from 'react'
import NavBar from '../../componentes/navBar/NavBar'
import Header from '../../componentes/header/Header'
import InfoSection from '../../componentes/information/InfoSection'
import Team from '../../componentes/team/Team'
import Testimonials from '../../componentes/testimonials/Testimonials'
import Footer from '../../componentes/footer/Footer'
import ReportSection from '../../componentes/report/ReportSection'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <Header/>
        <InfoSection/>
        <ReportSection/>
        <Team/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}
