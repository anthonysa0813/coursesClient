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

export const editFetch = async (endpoint: string, data: CoursesResponse) => {
  const response = await fetch(`${URL_DEV}/${endpoint}/${data._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const dataResponse = await response.json();
  return dataResponse;
};

export const getCourseFetch = async (endpoint: string, id: string) => {
  const response = await fetch(`${URL_DEV}/${endpoint}/${id}`);
  const data = await response.json();
  return data;
};

export const getCoursesQuery = async (endpoint: string, value: string) => {
  // courses?name=html
  // console.log(`${URL_DEV}/${endpoint}?name=${value}`);
  const response = await fetch(`${URL_DEV}/${endpoint}?name=${value}`);
  const data = response.json();
  return data;
};
