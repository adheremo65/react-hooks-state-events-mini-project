import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });




function App() {
  const [formElement,setFormElement]= useState("")
  const [filterd, setFiltered] = useState("All");
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const displayed = tasks.filter((task) => {
    if (filterd === "All") return true;
    return task.category === filterd;
  });

  function handleClick(cat) {
    setFiltered(cat);
  }

  // function deleteHandler(deletedTask) {
  //   setTasks(tasks.filter((task) => task.text !== deletedTask));
  // }
  // const categoryList = tasks.map((task)=>{
  //   return task.category;
  // })

  function deleteHandler(deleted) {
    setTasks(
      tasks.filter((task) => {
        return task.text !== deleted;
      })
    );
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        clicked={handleClick}
        filterd={filterd}
        CATEGORIES={CATEGORIES}
      />
      <NewTaskForm CATEGORIES={CATEGORIES} />
      <TaskList
        deleteHandler={deleteHandler}
        filtered={filterd}
        TASKS={tasks}
        displayed={displayed}
      />
    </div>
  );
}

export default App;
