import React from "react";
import { ButtoContainer } from "../../styles/elements/ButtonStyle";

interface Prop {
  children: JSX.Element[] | JSX.Element;
  bg?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}

const Button = ({ children, bg, onClick, type = "button" }: Prop) => {
  return (
    <ButtoContainer className={`btn ${bg}`} onClick={onClick} type={type}>
      {children}
    </ButtoContainer>
  );
};

export default Button;
