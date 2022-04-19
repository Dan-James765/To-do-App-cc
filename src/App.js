import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getStoredTodos();
  }, []);

  useEffect(() => {
    saveStoredTodos();
  }, [todos]);

  const saveStoredTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getStoredTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col  h-screen bg-green-50  pt-10">
        <h1 className="text-zinc-600 text-4xl pb-10">Let's Get Productive</h1>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
