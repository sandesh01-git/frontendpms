import axios from "axios";

export const fakeApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const ourApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});
