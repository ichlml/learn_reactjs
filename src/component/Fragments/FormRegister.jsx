import React from "react";
import Inputform from "../Elements/Input/Index";
import Button_elements from "../Elements/Buttons/Index";

const FormRegister = () => {
  return (
    <div>
      <form action="">
        <div className="mb-4">
          <Inputform
            label="Name"
            name="name"
            id="name"
            placeholder="john doe"
            type="text"
          />
        </div>
        <div className="mb-4">
          <Inputform
            label="Email"
            name="email"
            id="email"
            placeholder="mail.com"
            type="email"
          />
        </div>
        <div className="mb-4">
          <Inputform
            label="Password"
            name="password"
            id="password"
            placeholder="****"
            type="text"
          />
        </div>

        <Button_elements colorText="white" text="Register" props={"blue"} />
      </form>
    </div>
  );
};

export default FormRegister;
