import { Link } from "react-router-dom";
const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div>
      <div className="flex justify-center bg-white min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text text-3xl font-bold mb-2 text-blue-600">
            {title}
          </h1>
          <p className="font-medium mb-5 text-slate-500">
            Welcome, please enter detail ..
          </p>

          {children}
          {/* condisional rendering */}
          {/* <p className="text text-sm mt-4 text-center">
            {type === "login" ? "Don't have an account? " : "Have an account? "}
            {type === "login" && (
              <Link className="text-blue-600 font-bold" to="/register">
                sign up
              </Link>
            )}
            {type === "register" && (
              <Link className="text-blue-600 font-bold" to="/">
                sign in
              </Link>
            )}
          </p> */}

          <Navigation type={type} />
        </div>
      </div>
    </div>
  );
};

// condisional rendering
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text text-sm mt-4 text-center ">
        {`Don't have an account?`}
        <Link className="text-blue-600 font-bold" to="/register">
          sign up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text text-sm mt-4 text-center">
        {`have an account? `}
        <Link className="text-blue-600 font-bold" to="/">
          sign in
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
