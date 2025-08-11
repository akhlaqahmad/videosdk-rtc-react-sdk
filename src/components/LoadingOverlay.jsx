import React from "react";
import logo from "../pictures/logo.png";

const LoadingOverlay = ({ isLoading = false }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinning Logo */}
        <div className="relative">
          <img
            src={logo}
            alt="Loading..."
            className="h-16 w-16 animate-spin"
            style={{
              animation: "spin 1s linear infinite",
            }}
          />
        </div>
        
        {/* Loading Text with Pulse Animation */}
        <div className="text-center">
          <p className="text-white text-lg font-medium animate-pulse">
            Loading...
          </p>
        </div>
      </div>
      
      {/* Custom CSS for smooth spin animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingOverlay;
