<<<<<<< HEAD
import React from "react";
import StockChart from "../images/stock.svg";
import "./StatsRow.css";

function StatsRow(props) {
  //   console.log(props, "what is in props here?");
  // (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

  //   const getModal = () => {};
  return (
    <div className="row_container">
      <div className="row__intro">
        <h1 className="row__introheading">{props?.name}</h1>
        <p className="row_introParagraph">
          {props.volume && props.volume + " shares"}
        </p>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16} alt="mini-graph" />
      </div>
      <div className="row__numbers">
        <p className="row__price">${props.price}</p>
        <p
          className={
            percentage > 0 ? "row__percentage" : "row__percentage__negative"
          }
        >
          {" "}
          {Number(percentage).toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default StatsRow;
=======
import React from "react";
import StockChart from "../images/stock.svg";
import "./StatsRow.css";

function StatsRow(props) {
  //   console.log(props, "what is in props here?");
  // (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

  //   const getModal = () => {};
  return (
    <div className="row_container">
      <div className="row__intro">
        <h1 className="row__introheading">{props?.name}</h1>
        <p className="row_introParagraph">
          {props.volume && props.volume + " shares"}
        </p>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16} alt="mini-graph" />
      </div>
      <div className="row__numbers">
        <p className="row__price">${props.price}</p>
        <p
          className={
            percentage > 0 ? "row__percentage" : "row__percentage__negative"
          }
        >
          {" "}
          {Number(percentage).toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default StatsRow;
>>>>>>> fb1e426982acb339acff623b0fcf145be187d86c
