import React from "react";

interface Prop {
  content: string;
}

const Label = ({ content }: Prop) => {
  return <label>{content}</label>;
};

export default Label;
