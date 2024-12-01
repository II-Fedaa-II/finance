"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";

// Dynamically import Globe with SSR disabled
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const GlobalEarth = () => {
  const globeEl = useRef();

//   useEffect(() => {
//     if (globeEl.current) {
//       globeEl.current.controls().autoRotate = true; // Enable auto rotation
//       globeEl.current.controls().autoRotateSpeed = 0.5; // Adjust rotation speed
//     }
//   }, []);

  // Example: Dummy markers on the globe
  const markers = [
    { lat: 37.7749, lng: -122.4194, size: 10, color: "red" }, // San Francisco
    { lat: 48.8566, lng: 2.3522, size: 10, color: "blue" },  // Paris
    { lat: -33.8688, lng: 151.2093, size: 10, color: "green" } // Sydney
  ];

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Globe
        ref={globeEl}
        width={800} // Set globe width
        height={500} // Set globe height
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0, 0, 0, 0)" // Set background color to transparent
        pointsData={markers}
        pointLat={(d) => d.lat}
        pointLng={(d) => d.lng}
        pointColor={(d) => d.color}
        pointAltitude={(d) => d.size * 0.01} // Scale point size
      />
    </div>
  );
};

export default GlobalEarth;
