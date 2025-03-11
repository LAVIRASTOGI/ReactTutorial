import React, { use, useCallback, useEffect, useState } from "react";

function EventListener() {
  const [width, setWidth] = useState(window.innerWidth);

  //created once and function now always on eaxh rerender
  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return <>Width: {width}px </>;
}

export default EventListener;
