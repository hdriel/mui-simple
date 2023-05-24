import { useState, useRef, useEffect, useCallback } from "react";

export default function useElementSize(resize = false) {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = useCallback(() => {
    if (ref.current) {
      const { width, height } = ref.current?.getBoundingClientRect() ?? {};
      setWidth(width);
      setHeight(height);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    if (resize) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (resize) window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, resize]);

  return [ref, { width, height }];
}
