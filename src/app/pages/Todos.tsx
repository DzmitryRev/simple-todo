import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getIsAuth } from "../../modules/auth";
import { TodoList } from "../../modules/todo";

function Todos() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getIsAuth()) navigate("/login");
  }, []);

  return (
    <div className="flex justify-center">
      <TodoList />
    </div>
  );
}

export default Todos;
