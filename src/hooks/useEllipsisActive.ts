import { useEffect, useState } from "react";
import useElementSize from "./useElementSize";
import { getTextWidth } from "../utils/helpers";

export function useEllipsisActive({ active, text, maxRows }) {
  const [ref, { width: widthText }] = useElementSize(active);
  const [isEllipsis, setIsEllipsis] = useState(false);

  useEffect(() => {
    if (active) {
      const { offsetWidth } = getTextWidth(text);
      const rows = getElementRowCount(ref.current);
      const isEllipsis = !!(maxRows
        ? rows > maxRows
        : rows <= 1 && widthText && offsetWidth + 4 >= widthText);
      setIsEllipsis(isEllipsis);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widthText]);

  return [ref, isEllipsis];
}

function getElementRowCount(element) {
  const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
  const { height } = element.getBoundingClientRect();
  const rowCount = Math.round(height / lineHeight);
  return rowCount;
}