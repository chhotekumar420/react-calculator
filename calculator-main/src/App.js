import React, { useState } from "react";

function App() {
  const [result, setResult] = useState('');
 
  // function to display digits
  const clickHandler = (e) => {
    setResult(result.concat(e.target.value));
  }

  // function to clear display
const clear = () => {
    setResult("");
  }

  // function for backspace
  const deleteDigit = () => {
    setResult(result.slice(0,-1));
  }

  // function to display result
  const ans = () => {
    setResult(eval(result).toString());
  }

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" className="display-result" placeholder="0" value={result} />

        {/* div containing all keypad button */}
        <div className="keypad">

          <button value="clear" onClick={clear} id="top-line" className="wide">CE</button>
          <button value="delete" onClick={deleteDigit} id="top-line">DEL</button>
          <button value="/" onClick={clickHandler} id="tools">/</button>
          <button value="7" onClick={clickHandler}>7</button>
          <button value="8" onClick={clickHandler}>8</button>
          <button value="9" onClick={clickHandler}>9</button>
          <button value="*" onClick={clickHandler} id="tools">*</button>
          <button value="4" onClick={clickHandler}>4</button>
          <button value="5" onClick={clickHandler}>5</button>
          <button value="6" onClick={clickHandler}>6</button>
          <button value="-" onClick={clickHandler} id="tools">-</button>
          <button value="1" onClick={clickHandler}>1</button>
          <button value="2" onClick={clickHandler}>2</button>
          <button value="3" onClick={clickHandler}>3</button>

          <button value="+" onClick={clickHandler} id="tools">+</button>
          <button value="0" onClick={clickHandler} className="wide">0</button>

          <button value="." onClick={clickHandler}>.</button>
          <button value="=" onClick={ans} id="tools">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
