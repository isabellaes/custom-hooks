# Custom hooks

### useToggle

- Toggle on/off
- Reset to defaultvalue

Exampel

```js
import { useToggle } from "../../hooks/useToggle";

const ToggleButton = () => {
  const { on, toggle } = useToggle(false);
  return (
    <button
      onClick={() => toggle()}
      className={on ? "green toggle-button" : "red toggle-button"}
    >
      Toggle me
    </button>
  );
};

export default ToggleButton;
```

### useFetchSWPerson

- Fetch person from SW api

Exampel

```js
import useFetchSWPerson from "../../hooks/useFetchSWPerson";

const Person = () => {
  const { person } = useFetchSWPerson("1");
  return (
    <div className="person">
      <h2>Person</h2>
      {person
        ? `Name: ${person.name}, Haircolor: ${person.hair_color}, Eyecolor: ${person.eye_color}`
        : "Loading..."}
    </div>
  );
};

export default Person;
```

### useCounter

- Increase/Decrease with custom stepvalue
- Reset to custom startvalue
- Set custom min/max value

```js
import { useCounter } from "../../hooks/useCounter";

type CounterProps = {
  startValue: number,
  minValue: number,
  maxValue: number,
  stepValue: number,
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
```

### useLocalStorage

```js
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const { localState, handleSetState } = useLocalStorage("test", "item");
  return (
    <div className="app">
      <p>{localState}</p>
      <button onClick={() => handleSetState("test", "hejhej")}>
        Set new state
      </button>
    </div>
  );
}

export default App;
```
