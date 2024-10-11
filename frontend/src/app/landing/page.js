"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion"; // Import framer-motion

const Landing = () => {
  // Animation variants for each word
  const wordVariant = {
    hidden: { opacity: 0, y: 20 },  // Start with the word hidden and below
    visible: { opacity: 1, y: 0 },  // Fade and slide the word into place
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: "url('/images/landing.jpg')", 
        backgroundSize: "cover",   
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",  
        textAlign: "center",
      }}
    >

      {/* Headings and content */}
      <div style={{ position: "relative", zIndex: 1, color: "white", paddingTop: "50px" }}>
        <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>Welcome to Metropolitan Marketplace</h1>
        
        {/* Animated Text for Grow, Buy, Sell, Share */}
        <motion.h2
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}  
          style={{ fontSize: "40px" }}
        >
          <motion.span
            variants={wordVariant}
            transition={{ duration: 0.5 }}
            style={{ color: "white", marginRight: "10px" }}
          >
            Grow,
          </motion.span>

          <motion.span
            variants={wordVariant}
            transition={{ duration: 0.5 }}
            style={{ color: "white", marginRight: "10px" }}
          >
            Buy,
          </motion.span>

          <motion.span
            variants={wordVariant}
            transition={{ duration: 0.5 }}
            style={{ color: "white", marginRight: "10px" }}
          >
            Sell,
          </motion.span>

          <motion.span
            variants={wordVariant}
            transition={{ duration: 0.5 }}
            style={{ color: "white" }}
          >
            Share!
          </motion.span>
        </motion.h2>
      </div>
    </div>
  );
};
  
export default Landing;