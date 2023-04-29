import "./css/Style.css";
import { useState } from "react";

function ABVCalc() {
  const [result, setResult] = useState(0);
  const [originGravity, setOriginGravity] = useState();
  const [finalGravity, setFinalGravity] = useState();

  //let gravity = {}; for variables
  const originGravityHandler = (event) => {
    //gravity.OG = event.target.value; //using variables
    setOriginGravity(event.target.value);
  };

  const finalGravityHandler = (event) => {
    //gravity.FG = event.target.value; //using variables
    setFinalGravity(event.target.value); //using state
  };

  const calcABV = () => {
    //setResult((gravity.OG - gravity.FG) * 131.25);
    setResult((originGravity - finalGravity) * 131.25);
    setOriginGravity("");
    setFinalGravity("");
  };

  return (
    <div className="item ">
      <h2>ABV Calculation</h2>
      <div>
        <input
          type="number"
          value={originGravity}
          onChange={originGravityHandler}
          placeholder="Original gravity"
        />
      </div>
      <div>
        <input
          type="number"
          value={finalGravity}
          onChange={finalGravityHandler}
          placeholder="Final gravity"
        />
      </div>
      <div>
        <output>{result.toFixed(2) + "%"}</output>
      </div>
      <button onClick={calcABV}>Calculate</button>
    </div>
  );
}

export default ABVCalc;