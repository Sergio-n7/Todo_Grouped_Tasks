import React, { useEffect, useState } from "react";

function Dropdown({ multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress"
    )
      .then((response) => response.json())
      .then((selection) => setSelection(selection));
  }, [
    "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress",
  ]);
  console.log(selection);

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{selection.name}</p>
          <ul className="dd-header__title">
            {selection.map((selection) => (
              <li className="dd-header__title--bold" key={selection.id}>
                {selection.tasks[0].description}
              </li>
            ))}
          </ul>
        </div>
        <div className="dd-header__action">
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {selection.map((selection) => (
            <li className="dd-list-item" key={selection.id}></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
