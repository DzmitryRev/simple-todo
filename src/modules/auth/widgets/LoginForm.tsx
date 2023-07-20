import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextInput } from "../../../shared/components";
import { login } from "../storage/req";

export function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const inputUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username);
    setUsername("");
    navigate("/");
  };

  return (
    <form className="flex items-center" onSubmit={submit}>
      <div className="inline mr-2">
        <TextInput placeholder="Username" value={username} onInput={inputUsername} />
      </div>
      <Button type="submit">login</Button>
    </form>
  );
}
