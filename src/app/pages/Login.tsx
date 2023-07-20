import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getIsAuth } from "../../modules/auth";
import { LoginForm } from "../../modules/auth";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (getIsAuth()) navigate("/");
  }, []);

  return (
    <div className="flex justify-center">
      <LoginForm />
    </div>
  );
}

export default Login;
