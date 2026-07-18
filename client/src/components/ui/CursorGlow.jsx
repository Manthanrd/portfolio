import { useEffect, useRef } from "react";
import "../../styles/components/CursorGlow.css";

function CursorGlow() {

  const cursorRef = useRef(null);

  useEffect(() => {

    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);

    const animate = () => {

      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return <div ref={cursorRef} className="cursor-glow"></div>;
}

export default CursorGlow;