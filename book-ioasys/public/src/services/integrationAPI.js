import axios from "axios";

export const BASE_URL = "https://books.ioasys.com.br/api/v1";

export const fetchlogin = async (email, password) => {
  return await axios.post(`${BASE_URL}/auth/sign-in`, {
    email,
    password,
  });
};

export const fetchBook = async (page, category, auth) => {
  return await axios.get(
    `https://books.ioasys.com.br/api/v1/books?page=${page}&amount=12&category=${category}`,
    {
      headers: { authorization: `Bearer ${auth}` },
    }
  );
};