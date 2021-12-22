import { useState } from "react";

export default function TasksComponent({ selection, markTaskAsDone }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div tabIndex={0} className="dd-header" key={selection.name}>
      <ul className="dd-header__title">
        <li className="dd-header__title-item">{selection.name}</li>
        <li
          className="dd-header__action"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          {open ? "Hide" : "Show"}
        </li>
      </ul>

      {open && (
        <ul className="dd-list">
          {selection.tasks.map((task) => (
            <li className="dd-list-item" key={task.id}>
              <input
                onChange={(event) => {
                  markTaskAsDone(task.id);
                }}
                type="checkbox"
                className="checkbox"
                checked={task.checked}
              ></input>
              <span className="dd-list-item__name">
                {task.description || task.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
