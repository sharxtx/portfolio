import { useCallback, useRef } from "react";

const useThrottle = (callback: (...args: unknown[]) => void, delay: number) => {
  const lastCall = useRef(0);

  return useCallback((...args: unknown[]) => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    }
  }, [callback, delay]);
};

export default useThrottle;