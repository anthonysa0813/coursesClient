import React from "react";

interface PropInput {
  type: string;
  style?: string;
  value?: string;
  placeholder: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  style,
  value,
  placeholder,
  name,
  onChange,
}: PropInput) => {
  return (
    <input
      type={type}
      className={style}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
