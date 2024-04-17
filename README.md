# Custom hooks


### useToggle

- Toggle on/off 
- Reset to defaultvalue

```js
export const useToggle = (defaultValue: boolean) => {
  const [on, setToggle] = useState<boolean>(defaultValue);

  const toggle = () => {
    if (on) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const reset = () => {
    setToggle(defaultValue);
  };

  return { on, toggle, reset };
};
```

### useFetchSWPerson

- Fetch person from SW api

```js
const useFetchSWPerson = () => {
  const [person, setPerson] = useState({} as SWPerson);

  useEffect(() => {
    const fetchPersons = async () => {
      const url = "https://swapi.py4e.com/api/people/1";

      try {
        const response = await fetch(url);
        const result = await response.json();

        if (!ignore) {
          setPerson(result);
        }
      } catch (error) {}
    };
    let ignore = false;
    fetchPersons();
    return () => {
      ignore = true;
    };
  }, []);

  return { person };
};
export default useFetchSWPerson;

```

### useCounter

- Increase/Decrease with custom stepvalue
- Reset to custom startvalue
- Set custom min/max value

```js

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

```



