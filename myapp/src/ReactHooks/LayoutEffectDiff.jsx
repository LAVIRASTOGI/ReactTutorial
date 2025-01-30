import React, { useEffect, useLayoutEffect, useState } from "react";

function LayoutEffectDiff() {
  const [value, setValue] = useState("Initial");

  useEffect(() => {
    console.log("useEffect - Runs after paint");
    setValue("Updated by useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect - Runs before paint");
    setValue("Updated by useLayoutEffect");
  }, []);

  return <p>{value}</p>;
}

export default LayoutEffectDiff;
