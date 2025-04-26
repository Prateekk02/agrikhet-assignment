'use client'
import React, { useEffect, useState, useMemo } from 'react'
import { SparklesCore } from './ui/sparkles'
import { NavigationBar } from '@/components/NavigationBar'
import { Footer2 } from '@/components/Footer'
import { BackgroundBeams } from "@/components/ui/background-beams"
import { motion, AnimatePresence } from "motion/react"
import CategoryBar from './CategoryBar'
const HeroWithLoading = React.memo(function HeroWithLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsFading(true)
      
      const fadeTimer = setTimeout(() => {
        setIsLoading(false)
      }, 1000); // Fade transition duration
      
      return () => clearTimeout(fadeTimer);
    }, 2000); 

    return () => clearTimeout(loadingTimer);
  }, []);

  // Memoize the main content to prevent unnecessary re-renders
  const mainContent = useMemo(() => (
    <AnimatePresence mode="wait">
      <motion.div
        className="transition-opacity duration-1000 opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          <NavigationBar />
        </motion.div>
        <main className='h-screen'>
            <CategoryBar />
        </main>
        <Footer2 />
        <BackgroundBeams />
      </motion.div>
    </AnimatePresence>
  ), []);

  if (isLoading) {
    return <div className={`h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
    <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
      D2C
    </h1>
    <div className="w-[40rem] h-40 relative">
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

      {/* Core component */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      {/* Radial Gradient to prevent sharp edges */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  </div>
  }
  
  return mainContent;
});

export default HeroWithLoading; 