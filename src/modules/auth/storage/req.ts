import { IS_AUTH_STORAGE, USERNAME_STORAGE } from "./contants";

export const login = (username: string) => {
  localStorage.setItem(USERNAME_STORAGE, username);
  localStorage.setItem(IS_AUTH_STORAGE, "true");
};

export const logout = () => {
  localStorage.removeItem(USERNAME_STORAGE);
  localStorage.setItem(IS_AUTH_STORAGE, "false");
};

export const getUsername = () => {
  const username: string | null = localStorage.getItem(USERNAME_STORAGE);
  return username;
};

export const getIsAuth = () => {
  const isAuth: string | null = localStorage.getItem(IS_AUTH_STORAGE);
  return !!isAuth;
};
