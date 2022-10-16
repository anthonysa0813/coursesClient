import React, { useState } from "react";
import { BoxContainer } from "../styles/CourseStyle";
import { BiSearch } from "react-icons/bi";
import { getCoursesQuery } from "../api/useFetch";
import { CoursesResponse } from "../interfaces";

interface Prop {
  setSearchInput: (value: string) => void;
  searchInput: string;
  setCoursesData: React.Dispatch<React.SetStateAction<[] | CoursesResponse[]>>;
}

const Search = ({ setSearchInput, searchInput, setCoursesData }: Prop) => {
  const [error, setError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.trim() === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    getCoursesQuery("courses", searchInput).then((res) => {
      console.log("data res", res);
      setCoursesData(res);
    });
  };

  return (
    <form className="seachContainer" onSubmit={handleSubmit}>
      <BoxContainer className="boxContainer ">
        <BiSearch />
        <input
          type="text"
          placeholder="Buscar curso..."
          onChange={handleChange}
          value={searchInput}
        />
      </BoxContainer>
      {error && <span className="danger">Debes de Escribir algo...</span>}
    </form>
  );
};

export default Search;
