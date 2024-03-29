import { useEffect, useState } from "react";

export const useScreenMeasure = () => {
  const [dimensions, setDimensions] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setDimensions([window.innerWidth, window.innerHeight])
    );
    return () => {
      window.removeEventListener("resize", () =>
        setDimensions([window.innerWidth, window.innerHeight])
      );
    };
  }, []);

  return [dimensions[0] <= 800];
};
