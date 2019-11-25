import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Content from './components/Content'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Content title="Portfolio">
        <Portfolio />
      </Content>
      <Content title="About">
        <About />
      </Content>
      <Footer />
    </div>
  )
}

export default App
