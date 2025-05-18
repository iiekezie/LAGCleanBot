import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import './App.css';

function App() {
  const [result, setResult] = useState("Upload an image");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const image = document.createElement('img');
    image.src = URL.createObjectURL(file);

    image.onload = async () => {
      const model = await tf.loadLayersModel('/model/model.json');
      const tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
      const prediction = model.predict(tensor);
      prediction.array().then(array => {
        const classes = ['Plastic', 'Organic', 'Hazardous'];
        const maxIdx = array[0].indexOf(Math.max(...array[0]));
        setResult(`Prediction: ${classes[maxIdx]}`);
      });
    };
  };

  return (
    <div className="App">
      <h2>LAGCleanBot</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <p>{result}</p>
    </div>
  );
}

export default App;
