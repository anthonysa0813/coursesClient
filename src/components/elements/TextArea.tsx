import React from "react";

interface Prop {
  placeholder: string;
  value?: string;
}

const TextArea = ({ placeholder }: Prop) => {
  return <textarea placeholder={placeholder}></textarea>;
};

export default TextArea;
