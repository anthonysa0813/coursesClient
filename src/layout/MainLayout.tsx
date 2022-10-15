import React from "react";
import Aside from "../components/Aside";
import { MainContainer, Maingrid } from "../styles/Maingrid";

interface Prop {
  children: JSX.Element[] | JSX.Element;
}

const MainLayout = ({ children }: Prop) => {
  return (
    <Maingrid>
      <Aside />
      <MainContainer>{children}</MainContainer>
    </Maingrid>
  );
};

export default MainLayout;
