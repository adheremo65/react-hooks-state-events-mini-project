import React from "react";
import TaskList from "./TaskList";

function CategoryFilter({ CATEGORIES, filterd, clicked }) {
  const addedButten = CATEGORIES.map((item) => {
    return (
      <button
        className={filterd === item ? "selected" : ""}
        onClick={() => clicked(item)}
        key={item}
        name={item}
      >
        {item}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {addedButten}
    </div>
  );
}

export default CategoryFilter;
