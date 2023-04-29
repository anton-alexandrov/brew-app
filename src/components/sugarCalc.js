import "./css/Style.css";
import { useState } from "react";

const SugarCalc = () => {
  const [sugarAmount, setSugarAmount] = useState(0);

  const calcSugar = () => {
    setSugarAmount((gravity.TG-gravity.SG)*1000/36);
  };
  let gravity = {};
  const SGHandler = (event) => {
    gravity.SG = event.target.value;
  };
  const TGHandler = (event) => {
    gravity.TG = event.target.value;
  };
  return (
    <div className="item">
      <h2>Sugar Calculation</h2>
      <div>
        <input
          type="number"
          onChange={SGHandler}
          placeholder="Current gravity"
        />
      </div>
      <div>
        <input
          type="number"
          onChange={TGHandler}
          placeholder="Targeted gravity"
        />
      </div>
      <div className="column">
        <select id="sugarSource">
          <option value="35">Honey</option>
          <option value="46">Sugar</option>
        </select>
      </div>
      <div className="column">
        <select id="sweetness_level">
          <option value="1.006">Dry 0.990 - 1.006</option>
          <option value="1.012">Medium: 1.006 - 1.012</option>
          <option value="1.020">Sweet: 1.012 - 1.020</option>
          <option>Dessert: 1.020+</option>
        </select>
      </div>
      <div>
        <output>{sugarAmount.toFixed(2) + " lb"}</output>
      </div>
      <div>
        <output>{(sugarAmount*453.59237).toFixed(2) + " gr"}</output>
      </div>
      <button onClick={calcSugar}>Calculate</button>
    </div>
  );
};

export default SugarCalc;
