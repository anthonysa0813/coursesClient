import React from "react";
import { BoxContainer } from "../styles/CourseStyle";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="seachContainer ">
      <BoxContainer className="boxContainer ">
        <BiSearch />
        <input type="text" placeholder="Buscar curso..." />
      </BoxContainer>
    </div>
  );
};

export default Search;
