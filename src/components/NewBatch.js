import "./css/Style.css";
import { useState } from "react";

const NewBatch = (props) => {
  const [userInput, setUserInput] = useState({
    enteredID: 0,
    enteredName: "",
    enteredOG: 0,
    enteredFG: 0,
    enteredABV: 0,
    enteredStartDate: "",
    enteredBottledDate: "",
  });
  
  const idChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredID: event.target.value,
    });
  };

  const nameChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredName: event.target.value,
    });
  };

  const OGChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredOG: event.target.value,
    });
  };

  const FGChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredFG: event.target.value,
      enteredABV: (userInput.enteredOG - event.target.value) * 131.25,
    });
  };

  const startChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredStartDate: new Date(event.target.value),
    });
  };

  const bottledChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredBottledDate: new Date(event.target.value),
    });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevent form reload
    const batchData = {
      id: userInput.enteredID,
      name: userInput.enteredName,
      OG: userInput.enteredOG,
      FG: userInput.enteredFG,
      ABV: userInput.enteredABV,
      startDate: new Date(userInput.enteredStartDate),
      bottledDate: new Date(userInput.enteredBottledDate),
    };
    props.onSaveBatch(batchData);
  };
  return (
    <div>
      <div className="item">
        <form onSubmit={submitHandler}>
          <h2>Batch #</h2>
          <p>
            ID:{" "}
            <input
              type="number"
              step="1"
              min="6"
              placeholder="ID"
              onChange={idChangeHandler}
            />
          </p>
          <p>
            Name:{" "}
            <input
              type="name"
              placeholder="Name"
              onChange={nameChangeHandler}
            />
          </p>
          <p>
            OG:{" "}
            <input
              type="number"
              placeholder="Original gravity"
              step="0.001"
              onChange={OGChangeHandler}
            />
          </p>
          <p>
            FG:{" "}
            <input
              type="number"
              placeholder="Final gravity"
              step="0.001"
              onChange={FGChangeHandler}
            />
          </p>
          <p>
            ABV: <output>{userInput.enteredABV.toFixed(2) + "%"}</output>
          </p>
          <p>
            startDate: <input type="date" onChange={startChangeHandler} />
          </p>
          <p>
            bottledDate: <input type="date" onChange={bottledChangeHandler} />
          </p>
          <div>
            <button type="submit">Add batch</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBatch;
