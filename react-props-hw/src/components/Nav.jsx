import React from "react";
import "../css/Nav.css";
function Nav() {
  return (
    <nav className="navContanir">
      <div className="centeringNav">
        <img
          className="navImg"
          src="https://tuwaiq.edu.sa/img/logos/Logos_White-04.png"
          alt=""
        />
        <ul className="navUl">
          <li>الرئيسية</li>
          <li>المعسكرات والبرامج</li>
          <li>حول الاكاديمية</li>
          <li>الاكاديميات التابعة</li>
          <li>مركز الاختبارات</li>
        </ul>
      </div>
      <div className="btnCentering">
        <button className="btn">تسجيل الدخول</button>
        <button className="btn">English</button>
      </div>
    </nav>
  );
}

export default Nav;
