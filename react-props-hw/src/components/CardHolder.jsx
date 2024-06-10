import React from "react";
import Card from "./Card";
import "../css/CardHolder.css";
function CardHolder() {
  return (
    <>
      <div className="cardHolder">
        <Card
          coursType="لقاء"
          coursName="فاعلية طويق تالك "
          place="الرياض"
          date="2024/06/23"
        />
        <Card
          coursType="معسكر"
          coursName="هندسة الحوسبة السحابية"
          place="الرياض"
          date="2025/04/23"
        />
        <Card
          coursType="برنامج"
          coursName="ادارة خدمات تقنية المعلومات"
          place="الرياض"
          date="2024/09/23"
        />
        <Card
          coursType="معسكر"
          coursName="التطوير باستخدام تقنيات الواقع الممتد"
          place="الرياض"
          date="2023/10/23"
        />
        <Card
          coursType="برنامج"
          coursName="تصميم وتصنيع الحلول الهندسية"
          place="الرياض"
          date="2023/06/23"
        />
        <Card
          coursType="لقاء"
          coursName="امن المعلومات"
          place="الرياض"
          date="2024/01/23"
        />
      </div>
      <div className="holderbtn">
        <button>المزيد</button>
      </div>
    </>
  );
}

export default CardHolder;
