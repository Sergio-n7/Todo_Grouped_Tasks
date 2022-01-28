import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import "./index.scss";
import ProgressBar from "./ProgressBar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [selection, setSelection] = useState([]);
  const [normalize, setNormalize] = useState(0);

  function markTaskAsDone(taskId) {
    let newTaskState = selection.map((groupTask) => {
      let checkedTask = groupTask.tasks.map((singleTask) => {
        if (singleTask.id === taskId) {
          if (singleTask.checked) {
            return { ...singleTask, checked: false };
          } else {
            return { ...singleTask, checked: true };
          }
        } else {
          return singleTask;
        }
      });
      return { ...groupTask, tasks: checkedTask };
    });

    setSelection(newTaskState);
  }

  function sumAllValuesTasks() {
    return selection.reduce((acc, group) => {
      let sumOfAllTaskInGroup = group.tasks.reduce((acc, task) => {
        return task.value + acc;
      }, 0);
      return sumOfAllTaskInGroup + acc;
    }, 0);
  }

  function sumAllCheckedTasks() {
    return selection.reduce((acc, group) => {
      let sumOfAllCheckedTask = group.tasks.reduce((acc, task) => {
        if (task.checked) {
          return task.value + acc;
        } else {
          return acc;
        }
      }, 0);
      return sumOfAllCheckedTask + acc;
    }, 0);
  }

  function calculateNormalize(sumAllCheckedTasks, sumAlValuesTasks) {
    let normalize = (sumAllCheckedTasks * 100) / sumAlValuesTasks;
    setNormalize(normalize);
  }

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress"
    )
      .then((response) => response.json())
      .then((selection) => {
        let newTasks = selection.map((groupTask) => {
          let taskWithId = groupTask.tasks.map((singleTask) => {
            return { ...singleTask, id: uuidv4() };
          });
          return { ...groupTask, tasks: taskWithId };
        });
        setSelection(newTasks);
      });
  }, [
    "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress",
  ]);

  useEffect(() => {
    let sumAllValues = sumAllValuesTasks();
    let sumAllChecked = sumAllCheckedTasks();
    calculateNormalize(sumAllChecked, sumAllValues);
  }, [selection]);

  return (
    <div className="container">
      <div className="title-and-progressBar">
        <h1>Groupped Tasks</h1>
        <ProgressBar normalize={normalize} max={100} />
      </div>
      <Dropdown selection={selection} markTaskAsDone={markTaskAsDone} />
    </div>
  );
}

export default App;
