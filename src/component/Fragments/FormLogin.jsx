import React from "react";
import Button_elements from "../Elements/Buttons/Index";
import Inputform from "../Elements/Input/Index";

const FormLogin = () => {
  return (
    <div>
      <form action="">
        <div className="mb-4">
          <Inputform
            label="Email"
            name="email"
            placeholder="mail.com"
            type="email"
          />
        </div>
        <div className="mb-4">
          <Inputform
            label="Password"
            name="password"
            placeholder="***"
            type="password"
          />
        </div>

        <Button_elements colorText="white" text="Login" props={"blue"} />
      </form>
    </div>
  );
};

export default FormLogin;
