import CounterSimple from "./CounterSimple";
import { useState } from "react";
import AddCounter from "./AddCounter";

const initCounters = [
  {
    id: 1,
    title: "Dogs",
    counterValue: 4,
  },
  {
    id: 2,
    title: "Cats",
    counterValue: 5,
  },
];
const initCounters2 = [
  {
    id: 1,
    title: "Dogs",
    counterValue: 5,
  },
  {
    id: 2,
    title: "Cats",
    counterValue: 5,
  },
];

function CounterList() {
  // get how many counters we have
  // get average counter ammount
  const [counters, setCounters] = useState(initCounters);

  const onAddNewCounter = (newCounterTitle) => {
    // take the title entered
    // create new counter obj
    const newCounterObj = {
      id: 3,
      title: newCounterTitle,
      counterValue: 0,
    };
    // add object to current counters without modifying original

    setCounters([...counters, newCounterObj]);
  };

  const handleIncrement = (id) => {
    console.log("increse counter with id", id);
    // take counters arr, find the one with id === id and indcrese counter value by 1

    console.log(counters);
    const countersCopy = [...counters];
    const foundEl = countersCopy.find((el) => el.id === id);
    foundEl.counterValue = foundEl.counterValue + 1;
    setCounters(countersCopy);
  };

  return (
    <>
      <h2>Counter list</h2>
      <AddCounter onAddNewCounter={onAddNewCounter} />
      <div className="d-flex">
        {counters.map((counterObj) => (
          <CounterSimple
            key={counterObj.id}
            counter={counterObj}
            onIcrement={handleIncrement}
          />
        ))}
      </div>
    </>
  );
}

export default CounterList;
