import { useState } from "react";

function useVirtualScroll(data, rowHeight = 60, containerHeight = 600) {
  const [scrollTop, setScrollTop] = useState(0);

  const buffer = 5;

  const totalHeight = data.length * rowHeight;

  const visibleCount = Math.ceil(containerHeight / rowHeight);

  const startIndex = Math.floor(scrollTop / rowHeight);

  const endIndex = startIndex + visibleCount + buffer;

  const visibleData = data.slice(startIndex, endIndex);

  const offsetY = startIndex * rowHeight;

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return {
    visibleData,
    totalHeight,
    offsetY,
    handleScroll,
  };
}

export default useVirtualScroll;
