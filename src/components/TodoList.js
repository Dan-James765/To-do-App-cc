import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <>
      <div>
        <ul>
          {todos.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
