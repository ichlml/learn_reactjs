import React from "react";
import AuthLayout from "../component/Layouts/AuthLayout";
import FormLogin from "../component/Fragments/FormLogin";

const loginpage = () => {
  return (
    <div>
      <AuthLayout title="Login">
        <FormLogin />
      </AuthLayout>
    </div>
  );
};

export default loginpage;
