"use client"

import * as React from "react"
import {useState, useEffect, useRef} from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "motion/react"
 
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }
    
    // Start transition animation
    setIsTransitioning(true);
    
    // Set a timeout to actually change the theme after animation starts
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      
      // End transition after theme has changed
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800); // Slightly longer than animation to ensure it completes
    }, 200); // Wait for animation to start before changing theme
  }

  if(!mounted)
    return null;

  const maxRadius = Math.max(
    Math.sqrt(Math.pow(position.x, 2) + Math.pow(position.y, 2)),
    Math.sqrt(Math.pow(window.innerWidth - position.x, 2) + Math.pow(position.y, 2)),
    Math.sqrt(Math.pow(position.x, 2) + Math.pow(window.innerHeight - position.y, 2)),
    Math.sqrt(Math.pow(window.innerWidth - position.x, 2) + Math.pow(window.innerHeight - position.y, 2))
  );

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div 
            initial={{ clipPath: `circle(0px at ${position.x}px ${position.y}px)` }}
            animate={{ 
              clipPath: `circle(${maxRadius}px at ${position.x}px ${position.y}px)` 
            }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.3 } 
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed inset-0 z-50 pointer-events-none ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
            style={{
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)'
            }}
          >
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-blue-50 to-white' : 'bg-gradient-to-br from-gray-900 to-black'}`} 
                 style={{ mixBlendMode: 'normal', opacity: 0.9 }}/>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        ref={buttonRef}
        onClick={toggleTheme}
        variant="ghost"
        size="icon"
        className="relative p-1 hover:bg-transparent hover:cursor-pointer"
        disabled={isTransitioning}
      >
        <Sun
          className="h-4 w-4 rotate-0 scale-100 transition-transform duration-300 ease-in-out group-hover:rotate-90 dark:-rotate-90 dark:scale-0"
        />
        <Moon
          className="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-300 ease-in-out dark:rotate-0 dark:scale-100"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}
