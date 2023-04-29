import ABVCalc from "./components/abvCalc";
import SugarCalc from "./components/sugarCalc";
import Batches from "./components/Batches";
import NewBatch from "./components/NewBatch";
import { useState } from "react";

const INITIAL_BATCHES = [
  {
    id: 1,
    name: "Basic mead",
    originalGravity: 1.09,
    finalGravity: 0.997,
    abv: "12.5%",
    startDate: new Date("02-19-2023"),
    bottledDate: new Date("03-18-2023"),
  },
  {
    id: 2,
    name: "Orange mead",
    originalGravity: 1.092,
    finalGravity: 1.0,
    abv: "12.1%",
    startDate: new Date("02-22-2023"),
    bottledDate: new Date("03-19-2023"),
  },
  {
    id: 3,
    name: "Dry mead",
    originalGravity: 1.08,
    finalGravity: 0.998,
    abv: "10.7%",
    startDate: new Date("03-05-2023"),
    bottledDate: new Date("04-02-2023"),
  },
  {
    id: 4,
    name: "Berry mead",
    originalGravity: 1.082,
    finalGravity: 0.992,
    abv: "11.8%",
    startDate: new Date("03-31-2023"),
    bottledDate: new Date("04-31-2023"),
  },
  {
    id: 5,
    name: "Cherry mead",
    originalGravity: 1.104,
    finalGravity: 0.0,
    abv: "TDB",
    startDate: new Date("04-16-2023"),
    bottledDate: new Date("05-16-2023"),
  },
  {
    id: 6,
    name: "Dry cider",
    originalGravity: 1.052,
    finalGravity: 1.0,
    abv: "6.8%",
    startDate: new Date("04-02-2023"),
    bottledDate: new Date("04-16-2023"),
  },
];

function App() {
  const [batchList, setBatchList] = useState(INITIAL_BATCHES);

  const saveBatchHandler = (enteredBatchData) => {
    //setBatchList([...INITIAL_BATCHES, enteredBatchData]);

    setBatchList((prevBatchList) => {
      return [...prevBatchList,enteredBatchData];
    });
  };
  return (
    <div>
      <h1>Let's do the math!</h1>
      <ABVCalc />
      <SugarCalc />
      <div>
        <h1>Enter new batch</h1>
        <NewBatch onSaveBatch={saveBatchHandler} />
      </div>

      <h1>Your batches</h1>
      <Batches items={batchList} />
    </div>
  );
}

export default App;
