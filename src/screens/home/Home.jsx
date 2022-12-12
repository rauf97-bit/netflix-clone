import React from 'react'
import Hero from '../../components/Hero/Hero'
import Playlist from '../../components/List/Playlist'
import { Navbar } from '../../components/Navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero type={"Movies"}/>
      <Playlist />
    </>
  )
}

export default Home