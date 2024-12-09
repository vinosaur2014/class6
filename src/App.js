import React, { useState } from "react";
import "./App.css";

function App() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [result, setResult] = useState(null);

  const handleMultiply = () => {
    setResult(operand1 * operand2);
  };

  return (
    <div className="container">
      <h1>Product of two numbers</h1>
      {/* first number input */}
      <div>
        <label>Enter number1</label>
        <input
          type="number"
          value={operand1}
          onChange={(e) => setOperand1(Number(e.target.value))}
        />
      </div>
      {/* second number input */}
      <div>
        <label>Enter number2</label>
        <input
          type="number"
          value={operand2}
          onChange={(e) => setOperand2(Number(e.target.value))}
        />
      </div>
      <div>
        <strong>Result: {result !== null ? result : " "}</strong>
      </div>
      <button onClick={handleMultiply}>Multiply</button>
    </div>
  );
}

export default App;
