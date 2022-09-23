export const getAuthorization = () => {
  return localStorage.getItem("authorization");
  };
  export const setAuthorization = (authorization) => {
  localStorage.setItem("authorization", authorization);
  };
  export const deleteAuthorization = () => {
  localStorage.removeItem("authorization");
  };
  export const getUser = () => {
  const userLocalStorage = localStorage.getItem("user");
  return JSON.parse(userLocalStorage);
  };
  export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  };
  export const deleteUser = () => {
  localStorage.removeItem("user");
  };
  export const isAuthenticated = () => {
  if (getAuthorization()) return true;
  return false;
  };