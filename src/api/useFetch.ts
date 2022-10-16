import { CoursesResponse } from "../interfaces";

const URL_DEV = `http://localhost:5050/api`;

export const getData = async (endpoint: string) => {
  console.log(`${URL_DEV}/${endpoint}`);
  const response = await fetch(`${URL_DEV}/${endpoint}`);
  const data = response.json();
  return data;
};

export const postfetch = async (endpoint: string, data: CoursesResponse) => {
  const response = await fetch(`${URL_DEV}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataRes = await response.json();
  return dataRes;
};

export const deleteFetch = async (endpoint: string, id: string) => {
  const response = await fetch(`${URL_DEV}/${endpoint}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
