'use client'
import React, {useState} from "react"
import { motion } from "motion/react";

export default function CategoryBar() {
    const items = [
        {
            name: "New Arrivals",
            link: "#new-arrivals"
        },
        {
            name: "Sofa",
            link: "#sofa"
        },
        {
            name: "Bedroom",
            link: "#bedroom"
        },
        {
            name: "Dining & Kitchen",
            link: "#dining-kitchen"
        },
        {
            name: "Study & Office",
            link: "#study-office"
        }
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
     
    return (
     <div className="fixed w-full mt-2 z-30">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div 
           className="hidden md:flex justify-center items-center space-x-4 overflow-x-auto py-4"
           initial={{ opacity: 0, scale: 0.8, y: -20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{
             type: "spring",
             stiffness: 100,
             damping: 15,
             delay: 0.5
           }}
         >
           {items.map((item, idx) => (
             <motion.a
               key={`category-${idx}`}
               href={item.link}
               className={`relative px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer z-10 ${activeIndex === idx ? 'bg-gray-100 dark:bg-neutral-800' : ''}`}
               whileHover={{ 
                 scale: 1.1, 
                 y: -5,
                 boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
               }}
               whileTap={{ scale: 0.95 }}
               transition={{
                 type: "spring",
                 stiffness: 300,
                 damping: 15
               }}
               onClick={() => console.log(`Clicked: ${item.name}`)}
               onMouseEnter={() => setActiveIndex(idx)}
               onMouseLeave={() => setActiveIndex(-1)}
               style={{
                 pointerEvents: 'auto'
               }}
             >
               {item.name}
             </motion.a>
           ))}
         </motion.div>
         
         {/* Mobile menu toggle button - only shown on small screens */}
         <div className="md:hidden flex justify-center mt-2">
           <motion.button 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 dark:bg-neutral-800 cursor-pointer"
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             {isMobileMenuOpen ? "Close Categories" : "Browse Categories"}
           </motion.button>
         </div>
         
         {/* Mobile menu */}
         {isMobileMenuOpen && (
           <motion.div 
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             className="md:hidden flex flex-col items-center space-y-2 mt-2 pb-4 z-30"
           >
             {items.map((item, idx) => (
               <motion.a
                 key={`mobile-category-${idx}`}
                 href={item.link}
                 className="px-4 py-2 text-sm font-medium w-full text-center rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                 onClick={() => {
                   console.log(`Clicked mobile: ${item.name}`);
                   setIsMobileMenuOpen(false);
                 }}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.05 * idx }}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 {item.name}
               </motion.a>
             ))}
           </motion.div>
         )}
       </div>
     </div>
    )
}
