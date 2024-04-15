import { useState } from "react";

export const useCounter = (
  startValue: number,
  minValue: number,
  maxValue: number,
  stepValue: number
) => {
  const [count, setCount] = useState<number>(startValue);

  const increaseCount = () => {
    if (count + stepValue <= maxValue) {
      setCount(count + stepValue);
    }
  };

  const decreaseCount = () => {
    if (count - stepValue >= minValue) {
      setCount(count - stepValue);
    }
  };

  const resetCount = () => {
    setCount(startValue);
  };

  const setMaxValue = () => {
    setCount(maxValue);
  };

  const setMinValue = () => {
    setCount(minValue);
  };

  const isEven: boolean = count % 2 === 0;

  return {
    count,
    increaseCount,
    decreaseCount,
    resetCount,
    setMaxValue,
    setMinValue,
    isEven,
  };
};
