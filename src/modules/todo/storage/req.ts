import { nanoid } from "nanoid";
import { Todo } from "../types/todo";
import { TODO_STORAGE } from "./constants";

export const getAllTodos = () => {
  const todos: Todo[] = JSON.parse(localStorage.getItem(TODO_STORAGE) || "[]");
  return todos;
};

export const addTodo = (title: string) => {
  const todos: Todo[] = JSON.parse(localStorage.getItem(TODO_STORAGE) || "[]");
  todos.push({ id: nanoid(), title, status: false });
  localStorage.setItem(TODO_STORAGE, JSON.stringify(todos));
};

export const removeTodo = (todoId: string) => {
  const todos: Todo[] = JSON.parse(localStorage.getItem(TODO_STORAGE) || "[]");
  const newTodos = todos.filter((item) => item.id !== todoId);
  localStorage.setItem(TODO_STORAGE, JSON.stringify(newTodos));
};

export const toggleTodo = (todoId: string) => {
  const todos: Todo[] = JSON.parse(localStorage.getItem(TODO_STORAGE) || "[]");
  const newTodos = todos.map((item) => {
    if (item.id === todoId) item.status = !item.status;
    return item;
  });
  localStorage.setItem(TODO_STORAGE, JSON.stringify(newTodos));
};
