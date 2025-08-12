import React, { useEffect, useRef, useState } from "react";
import useIsTab from "../../hooks/useIsTab";
import useIsMobile from "../../hooks/useIsMobile";
import logo from "../../pictures/logo.png";

const WaitingToJoinScreen = () => {
  const waitingMessages = [
    { index: 0, text: "Creating your room..." },
    { index: 1, text: "Almost there..." },
  ];
  const [message, setMessage] = useState(waitingMessages[0]);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setMessage((s) =>
        s.index === waitingMessages.length - 1
          ? s
          : waitingMessages[s.index + 1]
      );
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [waitingMessages]);

  const isTab = useIsTab();
  const isMobile = useIsMobile();

  return (
    <div
      className="bg-bg text-text"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Animated Logo with Light Pink Tint */}
        <div className="relative">
          <img
            src={logo}
            alt="Loading..."
            className="animate-pulse"
            style={{
              height: isTab ? 160 : isMobile ? 160 : 200,
              width: isTab ? 160 : isMobile ? 160 : 200,
              filter: "hue-rotate(320deg) saturate(0.6) brightness(1.2)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
        
        <h1 className="text-text text-center font-bold text-xl">
          {message.text}
        </h1>
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

export default WaitingToJoinScreen;
