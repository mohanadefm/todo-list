import React from "react";
import Todo from "./Todo";

function List({ list, removeTodo, editTodo }) {
  const renderedList = list.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTodo={() => removeTodo(item._id)}
      editTodo={(updateditem) => editTodo(item._id, updateditem)}
      key={item.title}
    />
  ));

  return <div className="ui grid center aligned">{renderedList}</div>;
}

export default List;
