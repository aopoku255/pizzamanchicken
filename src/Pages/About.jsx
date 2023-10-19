import React from 'react'
// import AboutHero from './../components/AboutHero'
import AboutHero from "../Components/AboutHero"
import Journey from '../Components/Journey'
import Navbar2 from '../Components/Navbar2'
import Footer1 from '../Components/Footer1'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <>
    <Helmet>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.png" />
    <meta name="description" content="About Pizzaman Chickenman"/>
    <meta name="keywords" content="About Pizzaman, About Cheickenman, About Pizzamanchickenman, About Chickenmanpizzaman, About Pizza man, About chicken man"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="Pizzamanchickenman" />
    <meta property="og:description" content="Pizzaman Chickenman is a fully owned Ghanaian company which aims at serving the people of Ghana and Africa with the best of meals. " />
    <meta property="og:image" content="/public/logo.png" />
    <meta property="og:url" content="https://www.pizzamanchickenman.com/about-us" />
    <title>Pizzaman Chickenman | About Us</title>
    </Helmet>
      <Navbar2 />
      <AboutHero />
      <Journey />
      <Footer1 />
    </>
  )
}

export default About
