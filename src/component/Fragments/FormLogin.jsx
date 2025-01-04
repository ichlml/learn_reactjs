import React from "react";
import Button_elements from "../Elements/Buttons/Index";
import Inputform from "../Elements/Input/Index";

const FormLogin = () => {
  const HandleLogin = (event) => {
    event.preventDefault();
    console.log("login");
  };
  return (
    <div>
      <form onSubmit={HandleLogin}>
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

        <Button_elements
          colorText="white"
          text="Login"
          type="submit"
          props={"blue"}
        />
      </form>
    </div>
  );
};

export default FormLogin;
