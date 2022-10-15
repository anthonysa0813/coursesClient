import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AsideContainer } from "../styles/AsideStyle";
import { RiComputerLine } from "react-icons/ri";
import { FiBook } from "react-icons/fi";

const Aside = () => {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    console.log();
  }, []);

  return (
    <AsideContainer>
      <nav>
        <ul>
          <li>
            <Link to="/" className={path === "/" ? "active" : ""}>
              <RiComputerLine />
              Cursos
            </Link>
          </li>
          <li>
            <Link to="/classes" className={path === "/classes" ? "active" : ""}>
              <FiBook />
              Clases
            </Link>
          </li>
        </ul>
      </nav>
    </AsideContainer>
  );
};

export default Aside;
