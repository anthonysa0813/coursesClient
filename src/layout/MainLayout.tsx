import React from "react";
import Aside from "../components/Aside";
import { Maingrid } from "../styles/Maingrid";

interface Prop {
  children: JSX.Element[] | JSX.Element;
}

const MainLayout = ({ children }: Prop) => {
  return (
    <Maingrid>
      <Aside />
      {children}
    </Maingrid>
  );
};

export default MainLayout;
