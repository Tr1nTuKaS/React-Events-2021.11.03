import { useState } from "react";

export default function CounterSimple({ counter, onIcrement }) {
  // press button to increase counter value
  // const [counter, setCounter] = useState(0);

  const callIncrement = () => {
    // setCounter(counter + 1);
    onIcrement(counter.id);
  };

  return (
    <div className="border border-primary p-4 m-2">
      <h2>Counter: {counter.title}</h2>
      <h3>{counter.counterValue}</h3>
      <button onClick={callIncrement} className="btn btn-info">
        inc
      </button>
    </div>
  );
}
