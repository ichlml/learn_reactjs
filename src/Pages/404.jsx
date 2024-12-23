import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text text-3xl font-bold mb-2 text-blue-600">Oops!</h1>
      {/* <p>{err.message}</p> */}
      <p className="my-5 text text-xl">sorry, unexpected error has occurred!</p>
      <p className="text text-lg">
        <i>{err.statusText || err.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
