import React from "react";

//class component button
class Button extends React.Component {
  render() {
    return (
      <button className="h-10 px-6 font-semibold rounded-md bg-blue-700 hover:bg-slate-100 hover:text-black text-white">
        class component
      </button>
    );
  }
}

// fungsional component button
function Buttonblack() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-black hover:bg-slate-100 hover:text-black text-white">
      fungsional component
    </button>
  );
}

//arrow function component button
const Buttonwhite = () => {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-black hover:bg-slate-100 hover:text-black text-white">
      arrow function component
    </button>
  );
};

//component reusable
const Buttonaja = ({ props, colorText }) => {
  const colors = {
    red: "bg-red-500 hover:bg-red-700",
    blue: "bg-blue-500 hover:bg-blue-700",
    green: "bg-green-500 hover:bg-green-700",
  };

  const warna = {
    white: "text-white",
    red: "text-green-700",
  };

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${
        warna[colorText] || "text-gray-700"
      } ${colors[props] || "bg-gray-500 hover:bg-gray-700"}`}
    >
      Componen Button with props
    </button>
  );
};

function App() {
  return (
    <>
      <div className="flex justify-center bg-blue-300 min-h-screen items-center">
        {/* //memanggil component Button dengan props */}
        <div className="flex gap-4">
          <Buttonaja props="red" colorText="white" />
          <Buttonaja props="blue" colorText="red" />
          <Buttonaja props="green" colorText="red" />
        </div>
      </div>
    </>
  );
}

export default App;
