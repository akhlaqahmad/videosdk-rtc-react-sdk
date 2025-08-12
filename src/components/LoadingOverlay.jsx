import React from "react";
import logo from "../pictures/logo.png";

const LoadingOverlay = ({ isLoading = false }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-6">
        {/* Pulsing Logo with Light Pink Tint */}
        <div className="relative">
          <img
            src={logo}
            alt="Loading..."
            className="h-32 w-32 animate-pulse"
            style={{
              filter: "hue-rotate(320deg) saturate(0.6) brightness(1.2)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
        
        {/* Loading Text with Pulse Animation */}
        <div className="text-center">
          <p className="text-white text-xl font-medium animate-pulse">
            Loading...
          </p>
        </div>
      </div>
      
      {/* Custom CSS for smooth pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingOverlay;
