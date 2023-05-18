import React, { useEffect, useState } from "react";
import useElementSize from "./useElementSize";

export function useEllipsisActive() {
  const [ref] = useElementSize(true);
  const [isEllipsis, setIsEllipsis] = useState(false);
  const width = ref.current?.getBoundingClientRect()?.width;

  useEffect(() => {
    setIsEllipsis(ref.current?.offsetWidth < ref.current?.scrollWidth);
  }, [ref.current]);

  return [ref, isEllipsis];
}
