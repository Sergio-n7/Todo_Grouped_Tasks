import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import "./index.scss";
import ProgressBar from "./ProgressBar";

const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blade Runner 2049",
  },
];

function App() {
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress"
    )
      .then((response) => response.json())
      .then((selection) => setSelection(selection));
  }, [
    "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress",
  ]);

  return (
    <div className="container">
      <h1>Lodgify Groupped Tasks</h1>
      <ProgressBar value={40} max={100} />
      <Dropdown
        selection={selection}
        setSelection={setSelection}
        items={items}
      />
    </div>
  );
}

export default App;
