import React from "react";
import Label from "./Label";
import Input from "./Input";

const Forminput = (props) => {
  const { label, type, placeholder, name, id } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} id={name} />
    </div>
  );
};

export default Forminput;
