"use client";

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { IconShoppingCart, IconLogin } from "@tabler/icons-react";
import { motion } from "motion/react";

export function NavigationBar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Blogs",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {(visible) => (
            <>
              <NavbarLogo />
              
              {/* Search Bar - Adjusted width and positioning */}
              <div className="flex flex-1 items-center justify-center">
                <motion.div 
                  className="w-full max-w-sm"
                  animate={{
                    width: visible ? "90%" : "95%",
                    scale: visible ? 0.9 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 50,
                  }}
                >
                  <div className="relative">
                    <motion.input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-neutral-900 dark:text-white"
                      animate={{
                        height: visible ? "38px" : "44px",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                    <motion.button 
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-500 p-1 text-white"
                      animate={{
                        scale: visible ? 0.9 : 1,
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              
              <div className="relative z-30 flex items-center gap-4">
                <NavbarButton variant="secondary" className="flex items-center gap-2">
                  <IconShoppingCart size={18} />
                  Add to Cart
                </NavbarButton>
                <NavbarButton variant="primary" className="flex items-center gap-2">
                  <IconLogin size={18} />
                  Login
                </NavbarButton>
                <ThemeToggle />
              </div>
            </>
          )}
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-full p-2">
              <motion.input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-neutral-900 dark:text-white"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              />
            </div>
            
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 hover:bg-neutral-700 p-2 rounded-lg duration-400 dark:hover:bg-neutral-800 "
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="flex w-full items-center justify-center gap-2"
              >
                <IconShoppingCart size={18} />
                Add to Cart
              </NavbarButton>
              
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="flex w-full items-center justify-center gap-2"
              >
                <IconLogin size={18} />
                Login
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

