import { useState } from "react";
import { Button, TextInput } from "../../../shared/components";
import { addTodo } from "../storage/req";

type AddTodoFormProps = {
  updateCb: () => void;
};

export function AddTodoForm({ updateCb }: AddTodoFormProps) {
  const [todoTitle, setTodoTitle] = useState("");

  const inputTodoTitle = (e: React.FormEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value);
  };

  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todoTitle);
    updateCb();
    setTodoTitle("");
  };

  return (
    <form onSubmit={createTodo} className="flex items-center">
      <div className="inline mr-2">
        <TextInput value={todoTitle} onInput={inputTodoTitle} placeholder="Add todo" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
