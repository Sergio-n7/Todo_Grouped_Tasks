import { useState } from "react";

export default function TasksComponent({ selection, markTaskAsDone }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div tabIndex={0} className="dd-header" key={selection.name}>
      <ul className="dd-header__title">
        <li className="dd-header__title-item" onChange={(event) => {}}>
          <i className="far fa-clipboard dd-header__title-item--font"></i>
          {selection.name}
        </li>
        <li
          className="dd-header__action"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          {open ? (
            <span>
              Hide <i className="fas fa-chevron-up"></i>
            </span>
          ) : (
            <span>
              Show <i className="fas fa-chevron-down"></i>
            </span>
          )}
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
