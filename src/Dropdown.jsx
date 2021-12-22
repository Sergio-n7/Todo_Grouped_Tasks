import TasksComponent from "./TasksComponent";

function Dropdown({ selection, markTaskAsDone }) {
  return (
    <div className="dd-wrapper">
      {selection.map((selection) => (
        <TasksComponent selection={selection} markTaskAsDone={markTaskAsDone} />
      ))}
    </div>
  );
}

export default Dropdown;
