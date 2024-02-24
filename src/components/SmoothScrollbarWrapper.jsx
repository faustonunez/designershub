// SmoothScrollbar.js
import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScrollbar = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollRef.current, {
      // Options
      damping: 0.1,
      alwaysShowTracks: true,
    });

    return () => scrollbar.destroy();
  }, []);

  return (
    <div ref={scrollRef} style={{ height: "100vh", overflow: "hidden" }}>
      {children}
    </div>
  );
};

export default SmoothScrollbar;
