"use client"

import SocialIcons from './components/SocialIcons'
import Email from './components/Email'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Head from 'next/head'
import { useState } from 'react'
import Loader from './components/Loader'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  }
  
  return (
    <div>
      {showContent && (
        <>   
      <SocialIcons/>
      <Email/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
        </>
      )}
      <Loader isLoading={isLoading}  setIsLoading={handleLoaderLoaded}/>
    </div>
  )
}