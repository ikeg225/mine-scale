import React, { useRef, useEffect, useState } from "react";

const ObservedElement: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        height: "100px",
        width: "100%",
        backgroundColor: inView ? "lightgreen" : "lightcoral",
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      {inView ? "Element is in view" : "Element is out of view"}
    </div>
  );
};

export default ObservedElement;
