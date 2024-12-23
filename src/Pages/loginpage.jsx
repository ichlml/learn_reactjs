import { Link } from "react-router-dom";
import AuthLayout from "../component/Layouts/AuthLayout";
import FormLogin from "../component/Fragments/FormLogin";

const loginpage = () => {
  return (
    <div>
      <AuthLayout title="Login">
        <FormLogin />
        <p className="text text-sm mt-4 text-center">
          {` Don't have an account?`}{" "}
          <Link className="text-blue-600 font-bold" to="/register">
            sign up
          </Link>
        </p>
      </AuthLayout>
    </div>
  );
};

export default loginpage;
