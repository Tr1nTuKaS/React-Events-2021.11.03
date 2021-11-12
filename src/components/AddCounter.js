import { useState } from "react";

function AddCounter(props) {
  const [newCounterTitle, setNewCounterTitle] = useState("");
  const onNewCounterTitleEntry = (e) => {
    setNewCounterTitle(e.target.value);
  };

  const handleNewCounter = () => {
    props.onAddNewCounter(newCounterTitle);
    setNewCounterTitle("");
  };

  return (
    <div>
      <h2>add counter</h2>
      <input
        value={newCounterTitle}
        onChange={onNewCounterTitleEntry}
        className="form-control"
        type="text"
        placeholder="new counter"
      />
      <button onClick={handleNewCounter} className="btn btn-outline-primary">
        add
      </button>
    </div>
  );
}

export default AddCounter;
