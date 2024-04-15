import { useEffect } from "react";
import Counter from "./components/Counter";
import Person from "./components/starwars/Person";

function App() {
  return (
    <div className="app">
      <Person />
      <Counter startValue={1} minValue={1} maxValue={20} stepValue={3} />
      <Counter startValue={4} minValue={4} maxValue={24} stepValue={2} />
      <Counter startValue={10} minValue={10} maxValue={200} stepValue={10} />
    </div>
  );
}

export default App;
