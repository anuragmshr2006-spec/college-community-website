import React, { useState } from "react";
import "./Predictor.css";

const Predictor = () => {
  const [marks, setMarks] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handlePredict = (e) => {
    e.preventDefault();
    setPrediction(Math.min(100, Number(marks) + 10)); // Dummy prediction
  };

  return (
    <div className="predictor-container">
      <h2>Student Performance Predictor</h2>
      <form onSubmit={handlePredict}>
        <input
          type="number"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          placeholder="Enter previous aggregate (%)"
        />
        <button type="submit">Predict</button>
      </form>
      {prediction && <p>Predicted Next Exam Score: {prediction}%</p>}
    </div>
  );
};

export default Predictor;
