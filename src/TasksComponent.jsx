import { useState } from "react";

export default function TasksComponent({
  selection,
  setSelection,
  multiSelect = false,
}) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  function handleOnClick(task) {
    if (!selection.tasks.some((current) => current.value === task.value)) {
      if (!multiSelect) {
        setSelection([task]);
      } else if (multiSelect) {
        setSelection([...selection.tasks, task]);
      }
    } else {
      let selectionAfterRemoval = selection.tasks;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.value !== task.value
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isTaskInSelection(task) {
    if (selection.tasks.some((current) => current.value === task.value)) {
      return true;
    }
    return false;
  }

  return (
    <div
      tabIndex={0}
      className="dd-header"
      role="button"
      onKeyPress={() => toggle(!open)}
      onClick={() => toggle(!open)}
      key={selection.name}
    >
      <div className="dd-header__title">
        <p className="dd-header__title--bold">{selection.name}</p>
      </div>
      <div className="dd-header__action">
        <p>{open ? "Hide" : "Show"}</p>
      </div>
      
      {open && (
        <ul className="dd-list">
          {selection.tasks.map((task) => (
            //change id uuid
            <li className="dd-list-item" key={task.description}>
              <button type="button" onClick={() => handleOnClick(task)}>
                <span>{task.description}</span>
                <span>{isTaskInSelection(task) && "Selected"}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      </div>
    
  );
}
