"use client"
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (trailRef.current) {
        trailRef.current.animate(
          [
            { transform: trailRef.current.style.transform },
            { transform: `translate3d(${x}px, ${y}px, 0)` },
          ],
          {
            duration: 300,
            fill: "forwards",
          }
        );
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-green-500 opacity-30 pointer-events-none z-50"
      ></div>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-green-800 pointer-events-none z-50"
      ></div>
    </>
  );
};

export default CustomCursor;
