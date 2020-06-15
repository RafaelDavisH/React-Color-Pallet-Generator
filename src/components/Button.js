import React from "react";

const Button = ({ onClick, value }) => (
  <button
    className="flex transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-6 py-2 px-2 w-64 justify-center mx-auto bg-blue-500 hover:bg-blue-700 text-md font-mono text-white font-md rounded"
    onClick={onClick}
  >
    {value}
  </button>
);

export default Button;
