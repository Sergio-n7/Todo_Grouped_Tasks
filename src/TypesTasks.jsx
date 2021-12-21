import { useState } from "react";

export default function TypeTasks({ selection, tasks }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  function handleOnClick(tasks) {}

  return (
    <div>
      {open && (
        <ul className="dd-list">
          {selection.tasks.map((task) => (
            <li className="dd-list-item" key={task.description}>
              <button type="button" onClick={() => handleOnClick(task)}>
                <span>{task.description}</span>
                <span>selected...</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
