import { useEffect, useState } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState<number>(20);

  // Timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      // setFinished(true);
    }
  }, [timeLeft]);
  
  return <p className="font-semibold">⏱ Time Left: {timeLeft}s</p>;
}
