import { Todo } from "../types/todo";

type TodoItemProps = {
  todo: Todo;
  toggleTodo: () => void;
};

export function TodoItem({ todo, toggleTodo }: TodoItemProps) {
  return (
    <div className="flex items-center">
      <input
        className="mr-2"
        type="checkbox"
        checked={todo.status}
        onChange={() => {
          toggleTodo();
        }}
      />
      <p className={todo.status ? "line-through" : ""}>{todo.title}</p>
    </div>
  );
}
