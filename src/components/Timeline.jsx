import React from "react";
import "./Timeline.css";

function Timeline(props) {
  return (
    <div className="timeline__container">
      <div className="timeline__buttons__container">
        <button
          className="timeline__button "
          onClick={() => {
            props.childToParent("1d");
          }}
        >
          1D
        </button>
        <button
          className="timeline__button "
          onClick={() => props.childToParent("5d")}
        >
          5D
        </button>
        <button
          className="timeline__button"
          onClick={() => props.childToParent("1m")}
        >
          1M
        </button>
        <button
          className="timeline__button"
          onClick={() => props.childToParent("3m")}
        >
          3M
        </button>
        <button
          className="timeline__button"
          onClick={() => props.childToParent("1y")}
        >
          1Y
        </button>
        <button
          className="timeline__button"
          onClick={() => props.childToParent("5y")}
        >
          5Y
        </button>
      </div>
    </div>
  );
}

export default Timeline;
