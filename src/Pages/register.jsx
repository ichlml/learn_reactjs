import { Link } from "react-router-dom";
import AuthLayout from "../component/Layouts/AuthLayout";
import FormRegister from "../component/Fragments/FormRegister";

const register = () => {
  return (
    <div>
      <AuthLayout title="Register">
        <FormRegister />
        <p className="text text-sm mt-4 text-center">
          {`Have an account?`}{" "}
          <Link className="text-blue-600 font-bold" to="/">
            sign in
          </Link>
        </p>
      </AuthLayout>
    </div>
  );
};

export default register;
