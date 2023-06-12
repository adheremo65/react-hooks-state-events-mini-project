import React from "react";
import Task from "./Task";
import CategoryFilter from "./CategoryFilter";

function TaskList({ displayed, filtered, TASKS, deleteHandler }) {
  const ourTasks = displayed.map((task) => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        deleteHandler={deleteHandler}
      />
    );
  });

  return (
    <div className="tasks">
      {ourTasks}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
