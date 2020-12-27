import React from 'react'
import '../styles/hero.scss'

const Hero = () => {
  return (
    <>
      <section className="hero_image"></section>
      <section className="hero_Container">
        <section className="hero_text">
          <h1>Space Station Daily Summaries</h1>
          <p>
            Daily summaries from NASA.gov covering the daily activities of the
            astronauts aboard the International Space Station. At a running
            total of 150 billion USD, it is the most expensive man made object
            and has advanced our scientific research by leaps and bounds.
          </p>
        </section>
      </section>
    </>
  )
}

export default Hero
