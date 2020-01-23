import React from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero'
import Content from './Content'
import Portfolio from './Portfolio'
import About from './About'
import Badges from './Badges'

const Home = ({ projects }) => {
  return (
    <>
      <Hero />
      <Content bg="grey.200" title="Portfolio">
        <Portfolio projects={projects} />
      </Content>
      <Content bg="paper" title="About">
        <About />
      </Content>
      <Badges />
    </>
  )
}

Home.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home
