import { useCallback, useRef } from "react";

// Custom throttle hook
const useThrottle = (callback, delay) => {
  const lastCallRef = useRef(0); // Tracks the last time the function was called

  const throttledCallback = useCallback(
    (...args) => {
      const now = Date.now();
      if (now - lastCallRef.current >= delay) {
        lastCallRef.current = now; // Update the last call time
        callback(...args); // Execute the callback
      }
    },
    [callback, delay] // Recreate the throttled function if callback or delay changes
  );

  return throttledCallback;
};

export default useThrottle;
