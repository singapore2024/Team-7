import { Button } from "@nextui-org/react";

const Landing = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: "url('/images/landing.jpg')", // Correct path, starting from /images
        backgroundSize: "cover",   // Ensures the image covers the entire container
        backgroundPosition: "center",  // Centers the background image
        backgroundRepeat: "no-repeat",  // Prevents the image from repeating
        textAlign: "center",
      }}
    >

      {/* Headings and content */}
      <div style={{ position: "relative", zIndex: 1, color: "white", paddingTop: "200px" }}>
        <h1>Welcome to Metropolitan Marketplace</h1>
        <h2>Grow, Buy, Sell and Share Your Home-grown Crops!</h2>
      </div>
    </div>
  );
};

export default Landing;