import React from "react";
import "../css/Divaider.css";
function Divaider() {
  return (
    <div className="divaider">
      <div className="line">اكاديمية طويق</div>
      <div className="choise">
        <span>المعسكرات والبرامج</span>
        <div className="age">
          <button className="btn">الكبار</button>
          <button className="btn">الناشئون</button>
        </div>
        <button className="divaiderbtn">
          <img
            src="https://img.icons8.com/?size=25&id=21636&format=png&color=ffffff"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Divaider;
