import AuthLayout from "../component/Layouts/AuthLayout";
import FormRegister from "../component/Fragments/FormRegister";

const register = () => {
  return (
    <div>
      <AuthLayout title="Register" type="register">
        <FormRegister />
      </AuthLayout>
    </div>
  );
};

export default register;
