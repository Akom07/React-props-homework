import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <div className="footerFullBody">
      <div className="footerBody">
        <div className="footerImgDiv">
          <img
            className="footerImg"
            src="https://tuwaiq.edu.sa/img/logos/Logos_White-04.png"
            alt=""
          />
        </div>
        <div>
          <ul className="noStyle">
            <li>شارك كمدرب</li>
            <li>حول الاكاديمية</li>
          </ul>
        </div>
        <div>
          <ul className="noStyle">
            <li>الشروط والاحكام</li>
            <li>سياسة الخصوصية</li>
          </ul>
        </div>
        <div>
          <ul className="noStyle">
            <li></li>
            <li>@TuwaiqAcademy</li>
          </ul>
        </div>
        <div>
          <img src="https://tuwaiq.edu.sa/img/logos/logos2.svg" alt="" />
        </div>
      </div>
      جميع الحقوق محفوظة لأكاديمية طويق 2024
    </div>
  );
}

export default Footer;
