import "./css/Style.css";

const BatchItem = (props) => {
  return (
    <div>
      <fieldset>
        <h2>Batch #{props.id}</h2>
        <p>
          Name:<span> {props.name}</span>
        </p>
        <p>
          OG: <span>{props.originalGravity}</span>
        </p>
        <p>
          FG: <span>{props.finalGravity}</span>
        </p>
        <p>
          ABV: <span>{props.abv}</span>
        </p>
        <p>
          startDate:{" "}
          <span>
            {props.startDate.toLocaleString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </span>
        </p>
        <p>
          bottledDate:{" "}
          <span>
          {props.bottledDate.toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
          </span>
        </p>
      </fieldset>
    </div>
  );
};

export default BatchItem;
