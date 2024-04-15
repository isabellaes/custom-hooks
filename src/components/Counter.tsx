import { useCounter } from "../hooks/useCounter";

type CounterProps = {
  startValue: number;
  minValue: number;
  maxValue: number;
  stepValue: number;
};

const Counter = ({
  startValue,
  minValue,
  maxValue,
  stepValue,
}: CounterProps) => {
  const {
    count,
    increaseCount,
    decreaseCount,
    resetCount,
    setMaxValue,
    setMinValue,
    isEven,
  } = useCounter(startValue, minValue, maxValue, stepValue);

  return (
    <div className="counter">
      <p>Is even: {isEven ? "true" : "false"}</p>
      <div className="row">
        <button className="round" onClick={() => decreaseCount()}>
          -
        </button>
        <p>{count}</p>
        <button className="round" onClick={() => increaseCount()}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => resetCount()}>Reset</button>
        <button onClick={() => setMinValue()}>Set min</button>
        <button onClick={() => setMaxValue()}>Set max</button>
      </div>
    </div>
  );
};

export default Counter;
