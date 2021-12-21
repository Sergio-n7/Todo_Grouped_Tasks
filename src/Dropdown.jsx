import TasksComponent from "./TasksComponent";

function Dropdown({ selection, tasks = [], setSelection, items }) {
  return (
    <div className="dd-wrapper">
      {selection.map((selection) => (
        <TasksComponent
          selection={selection}
          tasks={tasks}
          setSelection={setSelection}
          items={items}
        />
      ))}
    </div>
  );
}

export default Dropdown;
