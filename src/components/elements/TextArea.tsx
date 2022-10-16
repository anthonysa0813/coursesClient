import React from "react";

interface Prop {
  placeholder: string;
  value?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ placeholder, value, onChange, name }: Prop) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={5}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
