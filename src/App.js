import React from "react";
import todos from "./apis";
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import { useState, useEffect } from "react/cjs/react.development";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await todos.get("/todos");
      setTodoList(response.data);
    }
    fetchData();
    // or you can use this way (It is similar)
    // (async function () {
    //   const response = await axios.get("http://localhost:3000/todos/");
    // })();
  }, []);

  const addTodo = async (item) => {
    const { data } = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]); // New Javascript
    // setTodoList((oldList) => oldList.concat(item)); // You can use this either
  };

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
    // setTodoList(todoList);
    console.log("todoList", todoList);
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  };

  return (
    <div className="ui container center aligned App">
      <Section className="heading">
        <h1>Todo List</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo} list={todoList} />
      </Section>

      <Section>
        <List editTodo={editTodo} list={todoList} removeTodo={removeTodo} />
      </Section>
    </div>
  );
}

export default App;
