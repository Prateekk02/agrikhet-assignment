'use client'
import React, { useEffect, useState, useMemo } from 'react'
import LampDemo from '@/components/ui/lamp'
import { NavigationBar } from '@/components/NavigationBar'
import { Footer2 } from '@/components/Footer'
import { BackgroundBeams } from "@/components/ui/background-beams"

const HeroWithLoading = React.memo(function HeroWithLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false)
    }, 2000); // Show loading state for 3 seconds

    return () => clearTimeout(timerId); // Cleanup function
  }, []);

  // Memoize the main content to prevent unnecessary re-renders
  const mainContent = useMemo(() => (
    <div>
      <NavigationBar />
      <main className='h-screen'>
        
      </main>
      <Footer2 />
      <BackgroundBeams />
    </div>
  ), []);

  if (isLoading) {
    return <LampDemo />
  }
  
  return mainContent;
});

export default HeroWithLoading; 