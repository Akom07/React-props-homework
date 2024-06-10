import React from "react";
import "../css/RegesterSteps.css";
function RegesterSteps() {
  return (
    <div className="stpes">
      <h1>خطوات التسجيل</h1>
      <div className="imgs">
        <div className="centering">
          <div className="circal">
            <img src="https://tuwaiq.edu.sa/img/course-step-1.svg" alt="" />
          </div>
          الانضمام إلى المنصة
        </div>
        <div className="centering">
          <div className="circal">
            <img src="https://tuwaiq.edu.sa/img/course-step-2.svg" alt="" />
          </div>
          التسجيل في المعسكر أو البرنامج
        </div>
        <div className="centering">
          <div className="circal">
            <img src="https://tuwaiq.edu.sa/img/course-step-3.svg" alt="" />
          </div>
          انتظار رسالة القبول
        </div>
      </div>
    </div>
  );
}

export default RegesterSteps;
