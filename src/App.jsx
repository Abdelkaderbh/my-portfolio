import React from 'react' 
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Exper from './components/experience/Exper'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
    <div className="contianer">
      <Header />
      <Nav />
      <About />
      <Exper />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      </div>
    </>
  );
}

export default App;
