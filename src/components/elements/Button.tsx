import React from "react";
import { ButtoContainer } from "../../styles/elements/ButtonStyle";

interface Prop {
  children: JSX.Element[] | JSX.Element;
  bg?: string;
}

const Button = ({ children, bg }: Prop) => {
  return <ButtoContainer className={`btn ${bg}`}>{children}</ButtoContainer>;
};

export default Button;
