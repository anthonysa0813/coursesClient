import { CoursesResponse } from "../interfaces";

const URL_DEV = `http://localhost:5050/api`;

export const getData = async (endpoint: string) => {
  console.log(`${URL_DEV}/${endpoint}`);
  const response = await fetch(`${URL_DEV}/${endpoint}`);
  const data = response.json();
  return data;
};
