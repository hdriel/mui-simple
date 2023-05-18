import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

export default function useElementSize(resize = false) {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current?.clientWidth ?? 0);
      setHeight(ref.current?.clientHeight ?? 0);
    }
  }, [ref.current]);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(ref.current?.clientWidth ?? 0);
      setHeight(ref.current?.clientHeight ?? 0);
    }
    if (resize && ref.current)
      window.addEventListener("resize", handleWindowResize);

    return () => {
      if (resize && ref.current)
        window.removeEventListener("resize", handleWindowResize);
    };
  }, [ref.current, resize]);

  return [ref, { width, height }];
}
