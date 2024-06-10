import React from "react";
import "../css/card.css";
function Card(props) {
  if (props.date < "2024/06/10") {
  }
  return (
    <div
      className="card"
      style={{
        boxShadow:
          props.date < "2024/06/10"
            ? "10px 0px gray"
            : props.coursType == "لقاء"
            ? "10px 0px violet"
            : props.coursType == "معسكر"
            ? "10px 0px blueviolet"
            : props.coursType == "برنامج"
            ? "10px 0px mediumturquoise"
            : "black",
      }}
    >
      <h4
        style={{
          color:
            props.date < "2024/06/10"
              ? "10px 0px gray"
              : props.coursType == "لقاء"
              ? "violet"
              : props.coursType == "معسكر"
              ? "blueviolet"
              : props.coursType == "برنامج"
              ? "mediumturquoise"
              : "black",
        }}
      >
        {props.coursType}
      </h4>
      <h2>{props.coursName}</h2>
      <div className="cardDet">
        <div className="centering">
          <img
            src="https://img.icons8.com/?size=25&id=67483&format=png&color=000000"
            alt=""
          />
          <span>{props.place}</span>
        </div>
        <div className="centering">
          <img
            src="https://img.icons8.com/?size=25&id=8yG2a6v2mm3S&format=png&color=000000"
            alt=""
          />
          <span>{props.date}</span>
        </div>
      </div>
      <div className="cardbtn">
        <button className="btn">التفاصيل</button>
      </div>
    </div>
  );
}

export default Card;
