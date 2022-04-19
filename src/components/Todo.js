import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <>
      <div className="flex gap-4 pt-6 items-center">
        <li className="w-96 bg-white shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline truncate">
          {text}
        </li>
        <button
          className="flex-shrink-0 bg-teal-600 hover:bg-teal-800  text-sm  text-white py-1 px-2 rounded"
          onClick={deleteHandler}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default Todo;
