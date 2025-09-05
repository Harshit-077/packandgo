// import React from 'react'

// const Hero = () => {
//     return (
//         <>
//             <div
//                 className="hero min-h-screen"
//                 style={{
//                     backgroundImage: `url(/main.jpg) `
//                 }}
//             >
//                 <div className="hero-overlay"></div>
//                 <div className="hero-content text-neutral-content text-center">
//                     <div className="max-w-md">
//                         <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//                         <p className="mb-5">
//                             Pack your bags. We’re going on vacation!
//                         </p>
//                         <button className="btn btn-ghost btn-primary rounded-box">Get Started</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Hero




"use client";

import React, { useEffect, useState } from "react";

const images = [
  "/main.jpg",
  "/beach.jpg",
  "/forest.jpg",
  "/city.jpg",
]; // put your images in /public

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero min-h-screen relative overflow-hidden">
      {/* Background slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold animate-fade-in">
            Hello there
          </h1>
          <p className="mb-5">
            Pack your bags. We’re going on vacation!
          </p>
          <button className="btn btn-primary rounded-box shadow-lg hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
