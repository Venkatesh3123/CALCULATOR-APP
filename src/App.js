import "./App.css";
import { useState } from "react";
import React from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleValue = (value) => {
    setInput((prev) => {
      return prev + value;
    });
  };
  const evaluate = () => {
    const result = eval(input);
    setOutput(result);
    setInput("");
  };
  const clear = () => {
    setInput("");
    setOutput("");
  };
  const backspace = () => {
    let length = input.length - 1;
    const remove = input.slice(0, length);
    setInput(remove);
  };

  return (
    <div className="App">
      <h1>CALCULATOR</h1>

      <div>
        <input value={input === "" ? output : input}></input>
        <br></br>
        <button onClick={() => handleValue("0")}>0</button>
        <button onClick={() => handleValue("1")}>1</button>
        <button onClick={() => handleValue("2")}>2</button>
        <button onClick={() => handleValue("3")}>3</button>
        <br></br>
        <button onClick={() => handleValue("4")}>4</button>
        <button onClick={() => handleValue("5")}>5</button>
        <button onClick={() => handleValue("6")}>6</button>
        <button onClick={() => handleValue("7")}>7</button>
        <br></br>
        <button onClick={() => handleValue("8")}>8</button>
        <button onClick={() => handleValue("9")}>9</button>
        <button onClick={() => handleValue("+")}>+</button>
        <button onClick={() => handleValue("-")}>-</button>
        <br></br>
        <button onClick={() => handleValue("/")}>/</button>
        <button onClick={() => handleValue("*")}>*</button>
        <button onClick={evaluate}>=</button>
        <br></br>
        <button onClick={clear} className="clear">
          clear
        </button>
        <button onClick={backspace} className="clear1">
          backspace
        </button>
      </div>
    </div>
  );
}
