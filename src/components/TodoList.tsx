import React from "react";
import { Todo } from "../modules/todos";
import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";

function TodoList() {
  const todos: Todo[] = useTodos();

  if (todos.length === 0) return <p>No Items</p>;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
