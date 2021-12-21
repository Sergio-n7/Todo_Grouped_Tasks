import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function TasksComponent2({ selection, setSelection }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  function handleOnChange(selection) {
    setSelection(selection);
  }

  function isTaskInSelection(task) {}

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
        <div className="dd-header__action">
          <p>
            {selection.name}
            {open ? "Hide" : "Show"}
          </p>
        </div>
        <MultiSelect
          className="dd-header__title--bold"
          onChange={handleOnChange}
          options={selection.tasks.description}
        ></MultiSelect>
      </div>

      {open && (
        <ul className="dd-list">
          {selection.tasks.map((task) => (
            //change id uuid
            <MultiSelect
              key={task.value}
              className="dd-list-item"
              onChange={handleOnChange}
              options={task.description}
            ></MultiSelect>
          ))}
        </ul>
      )}
    </div>
  );
}
