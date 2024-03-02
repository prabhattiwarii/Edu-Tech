import React from 'react'
import Header from './components/header/Header'
import "./App.css"
import Banner from './components/banner/Banner'
import Programe from './components/program/Programe'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <div className="container">
          <Title subTitle="OUR PROGRAM" title="What We Offer"/>
          <Programe/>
          <About/>
          <Title subTitle="GALLERY" title="Campus Photos"/>
          <Campus/>
          <Title title="TESTIMONIALS" subTitle="What Student Says"/>
          <Testimonial/>
          <Title title="Get in touch" subTitle="CONTACT US"/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}

export default App