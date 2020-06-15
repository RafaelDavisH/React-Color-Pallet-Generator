import React, { useState } from "react";
import Button from "./components/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [copiedColor, setCopiedColor] = useState("");
  // const [copiedPalette, setCopiedPalette] = useState(false);
  const [colors, setColors] = useState([
    "#BDFCE4",
    "#DD0E48",
    "#9EF5F0",
    "#8F6A61",
    "#6DAB4C"
  ]);

  const colorsArray = [];
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  };

  const handleCopied = e => {
    const copyColor = e.currentTarget.querySelector("input").value;
    setCopied(true);
    setCopiedColor(copyColor);
  };

  const handleClick = i => {
    let hexColor = "#";
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 6; j++) {
        hexColor += hex[getRandomNumber()];
      }
      colorsArray.push(hexColor);
      hexColor = "#";
    }
    setColors(colorsArray);
  };

  // const handleEventKeyC = event => {
  //   if (event.code === "KeyC") {
  //     setCopiedPalette(true);
  //   }

  // };

  // window.addEventListener("keypress", handleEventKeyC, false);

  const Palette = ({ onClick }) =>
    colors.map(color => {
      return (
        <CopyToClipboard key={color} text={color}>
          <div
            onClick={onClick}
            className="App box-border transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110 hover:shadow-2xl pt-2 px-2 mt-8 flex mx-auto flex-col items-center justify-start w-48 h-64 rounded-lg bg-white"
          >
            <div
              className="w-40 h-48 rounded-md"
              style={{ backgroundColor: `${color}` }}
            >
              {copied && color === copiedColor ? (
                <p className="text-lg font-bold font-sans my-16 text-center text-white">
                  Copied!
                </p>
              ) : null}
            </div>
            <input
              value={color}
              className="text-gray-600 text-lg w-20 font-bold font-mono m-auto text-center"
              type="text"
            />
          </div>
        </CopyToClipboard>
      );
    });

  return (
    // <CopyToClipboard text={colors}>
    <div className="mt-0 py-8 min-h-screen h-full w-screen bg-gray-200 justify-center border-2 border-gray-500">
      {/* {copiedPalette ? (
          <div
            class="w-1/2 mx-auto bg-blue-100 border border-blue-400 text-center text-blue-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Palette Copied to Clipboard!</strong>

            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                class="fill-current h-6 w-6 text-blue-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        ) : null} */}
      <h1 className="text-center text-3xl font-bold font-mono mt-0">
        Color Palette Generator
      </h1>
      <div className="flex flex-wrap flex-row gap-6 w-3/4 mx-auto">
        <Palette onClick={handleCopied} />
      </div>
      <Button value="Generate palette" onClick={handleClick} />
      <p className="text-center text-xs">@RafaelDavisH</p>
      <p className="md:w-1/3 sm:w-1/3 mt-16 text-sm py-2 px-10 bg-white text-gray-500 rounded-lg  mx-auto text-center ">
        Click to copy individual color
      </p>
    </div>
    // </CopyToClipboard>
  );
}
