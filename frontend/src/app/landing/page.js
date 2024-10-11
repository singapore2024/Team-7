"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/landing1.jpg",
  "/images/landing2.jpg",
  "/images/landing3.jpg",
]; // Add more image URLs as needed

const Landing = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically swap images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Loop through images
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden", // Ensure images don't overflow
        padding: "150px",
      }}
    >
      {/* Animated Background Image */}
      <motion.div
        key={currentImage} // Use the image index as a unique key to trigger animations
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }} // Smooth fade transition
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></motion.div>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor:
            currentImage === 0
              ? "rgba(0, 0, 0, 0.1)" // Lighter overlay for the first image
              : "rgba(0, 0, 0, 0.55)", // Darker overlay for other images
          zIndex: 1,
        }}
      ></div>

      {/* Content section */}
      <div style={{ position: "relative", zIndex: 2, color: "white" }}>
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "64px",
            fontWeight: "700",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          Welcome to UrbanHarvest
        </motion.h1>

        {/* Animated subheading with dynamic colors */}
        <motion.h2
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3 }}
          style={{
            fontSize: "40px",
            fontWeight: "500",
            marginBottom: "40px",
          }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.5 }}
            style={{ color: "green", marginRight: "10px" }}
          >
            Grow,
          </motion.span>

          <motion.span
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.5 }}
            style={{ color: "#f4b400", marginRight: "10px" }}
          >
            Buy,
          </motion.span>

          <motion.span
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.5 }}
            style={{ color: "#ff6f61", marginRight: "10px" }}
          >
            Sell,
          </motion.span>

          <motion.span
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.5 }}
            style={{ color: "#76c7c0" }}
          >
            Share!
          </motion.span>
        </motion.h2>
      </div>
    </div>
  );
};

export default Landing;
