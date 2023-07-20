import { useEffect, useState } from "react";
import { Button } from "../../../shared/components";
import { getAllTodos, removeTodo, toggleTodo } from "../storage/req";
import { Todo } from "../types/todo";
import { AddTodoForm } from "./AddTodoForm";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const updateTodos = () => {
    setTodos(getAllTodos());
  };

  useEffect(() => {
    updateTodos();
  }, []);

  return (
    <div>
      <AddTodoForm updateCb={updateTodos} />
      {!todos.length && <p className="text-center pt-5">You have not todos!</p>}
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex justify-between my-3">
            <TodoItem
              todo={todo}
              toggleTodo={() => {
                toggleTodo(todo.id);
                updateTodos();
              }}
            />
            <Button
              onClick={() => {
                removeTodo(todo.id);
                updateTodos();
              }}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </div>
  );
}
