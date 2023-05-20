import React, { useEffect, useState } from "react";
import useElementSize from "./useElementSize";

function addParagraphToWindow(text) {
  const element = document.createElement("span");
  element.textContent = text;
  document.body.appendChild(element);
  const { offsetWidth, scrollWidth } = element;
  element.parentElement.removeChild(element);
  return { offsetWidth, scrollWidth };
}

function getElementRowCount(element) {
  const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
  const { height } = element.getBoundingClientRect();
  const rowCount = Math.round(height / lineHeight);
  return rowCount;
}

export function useEllipsisActive(text, maxRows) {
  const [ref, { width: widthText }] = useElementSize(true);
  const [isEllipsis, setIsEllipsis] = useState(false);

  useEffect(() => {
    const { offsetWidth } = addParagraphToWindow(text);
    const rows = getElementRowCount(ref.current);
    const isEllipsis = !!(maxRows
      ? rows > maxRows
      : rows <= 1 && widthText && offsetWidth + 4 >= widthText);
    setIsEllipsis(isEllipsis);
  }, [widthText]);

  return [ref, isEllipsis];
}
