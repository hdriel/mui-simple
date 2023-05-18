import React, { useEffect, useState } from "react";
import useElementSize from "./useElementSize";

export function useEllipsisActive() {
  const [ref, { width }] = useElementSize(true);
  const [isEllipsis, setIsEllipsis] = useState(false);

  useEffect(() => {
    if (ref.current?.scrollWidth) {
      setIsEllipsis(ref.current?.offsetWidth < ref.current?.scrollWidth);
    } else {
      const w = width - parseInt(width);
      setIsEllipsis(w > 0.1);
    }
  }, [width]);

  return [ref, isEllipsis];
}
