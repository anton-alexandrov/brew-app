import "./css/Style.css";
import BatchItem from "./BatchItem";

const Batches = (props) => {
  //could be moved to App.js
  /*const batch = [{
    id: 1,
    name: "Basic mead",
    og: 1.092,
    fg: 0.996,
    abv: "12.4%",
    startDate: new Date("02-10-2023"),
    bottledDate: new Date("03-10-2023"),
  },{
    id: 2,
    name: "Orange mead",
    og: 1.09,
    fg: 1.00,
    abv: "12.4%",
    startDate: new Date("02-10-2023"),
    bottledDate: new Date("03-10-2023"),
  }];*/
  return (
    /* <div className="batch-row">
      <div className="column item">
        <fieldset>
          {/*<span>Batch #{batch[0].id}</span>*/ //}
    /*  <span>Batch #{props.items[0].id}</span>
          <label>
            Name: <span>{props.items[0].name}</span>
          </label>
          <label>
            OG: <span>{props.items[0].og}</span>
          </label>
          <label>
            FG: <span>{props.items[0].fg}</span>
          </label>
          <label>
            ABV: <span>{props.items[0].abv}</span>
          </label>
        </fieldset>
      </div>
      <div className="column item">
        <fieldset>
          <span>Batch #{props.items[1].id}</span>
          <label>
            Name: <span>{props.items[1].name}</span>
          </label>
          <label>
            OG: <span>{props.items[1].og}</span>
          </label>
          <label>
            FG: <span>{props.items[1].fg}</span>
          </label>
          <label>
            ABV: <span>{props.items[1].abv}</span>
          </label>
        </fieldset>
      </div>
    </div>*/

    /*  Still static approach */
    /*
    <div className="batch-row">
      <div className="column item">
        <BatchItem
          id={props.items[0].id}
          name={props.items[0].name}
          originalGravity={props.items[0].originalGravity}
          finalGravity={props.items[0].finalGravity}
          abv={props.items[0].abv}
          startDate={props.items[0].startDate}
          bottledDate={props.items[0].bottledDate}
        ></BatchItem>
      </div>
      <div className="column item">
        <BatchItem
          id={props.items[1].id}
          name={props.items[1].name}
          originalGravity={props.items[1].originalGravity}
          finalGravity={props.items[1].finalGravity}
          abv={props.items[1].abv}
          startDate={props.items[1].startDate}
          bottledDate={props.items[1].bottledDate}
        ></BatchItem>
      </div>
      <div className="column item">
        <BatchItem
          id={props.items[2].id}
          name={props.items[2].name}
          originalGravity={props.items[2].originalGravity}
          finalGravity={props.items[2].finalGravity}
          abv={props.items[2].abv}
          startDate={props.items[3].startDate}
          bottledDate={props.items[4].bottledDate}
        ></BatchItem>
      </div>
      <div className="column item">
        <BatchItem
          id={props.items[3].id}
          name={props.items[3].name}
          originalGravity={props.items[3].originalGravity}
          finalGravity={props.items[3].finalGravity}
          abv={props.items[3].abv}
          startDate={props.items[3].startDate}
          bottledDate={props.items[3].bottledDate}
        ></BatchItem>
      </div>
      <div className="column item">
        <BatchItem
          id={props.items[4].id}
          name={props.items[4].name}
          originalGravity={props.items[4].originalGravity}
          finalGravity={props.items[4].finalGravity}
          abv={props.items[4].abv}
          startDate={props.items[4].startDate}
          bottledDate={props.items[4].bottledDate}
        ></BatchItem>
      </div>
      <div className="column item">
        <BatchItem
          id={props.items[5].id}
          name={props.items[5].name}
          originalGravity={props.items[5].originalGravity}
          finalGravity={props.items[5].finalGravity}
          abv={props.items[5].abv}
          startDate={props.items[5].startDate}
          bottledDate={props.items[5].bottledDate}
        ></BatchItem>
      </div>
    </div>*/
    /* Dynamic approach */
    <div className="batch-row">
      {props.items.map((eachRecord) => (
        <div className="column item">
          <BatchItem
            key={eachRecord.id}
            id={eachRecord.id}
            name={eachRecord.name}
            originalGravity={eachRecord.originalGravity}
            finalGravity={eachRecord.finalGravity}
            abv={eachRecord.abv}
            startDate={eachRecord.startDate}
            bottledDate={eachRecord.bottledDate}
          ></BatchItem>
        </div>
      ))}
    </div>
  );
};

export default Batches;
