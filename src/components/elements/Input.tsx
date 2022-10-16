import React from "react";

interface PropInput {
  type: string;
  style?: string;
  value?: string;
  placeholder: string;
  // onChange?: (value: string) => void
}

const Input = ({ type, style, value, placeholder }: PropInput) => {
  return (
    <input
      type={type}
      className={style}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
