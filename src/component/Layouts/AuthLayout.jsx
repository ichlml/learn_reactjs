import React from "react";

const AuthLayout = (props) => {
  const { children, title } = props;
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
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
