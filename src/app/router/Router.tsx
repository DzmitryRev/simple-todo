import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Login from "../pages/Login";
import Todos from "../pages/Todos";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<Todos />} />
      <Route path={"/login"} element={<Login />} />
    </Routes>
  );
}
