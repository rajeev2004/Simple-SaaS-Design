import { useState, useEffect, useRef } from "react";

export function useTypingEffect(text, speed = 40, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  // prevents multiple runs
  const hasStarted = useRef(false);

  // persistent index
  const indexRef = useRef(0);

  useEffect(() => {
    if (hasStarted.current) return; 
    hasStarted.current = true;

    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (indexRef.current < text.length) {
          setDisplayed((prev) => prev + text[indexRef.current]);
          indexRef.current++;
        } else {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
