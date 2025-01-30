import { useLayoutEffect, useRef, useState } from "react";

function ThirdUseLayoutEffect() {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    console.log("runs before render");
    if (divRef && divRef.current) {
      setWidth(divRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div ref={divRef} style={{ width: "20%", background: "lightblue" }}>
      <p>Width: {width}px</p>
    </div>
  );
}

export default ThirdUseLayoutEffect;
