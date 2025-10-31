import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IPhonSectionOne from "./IPhonSectionOne";
import IPhonSectionTwo from "./IPhonSectionTwo"; // مثال لمحتوى آخر
import IPhonSectionThree from "./IPhonSectionThree";
import PaginationIndicator from "../Common/components/PaginationIndicator"; // ← المكون الذي أعطيتني إياه
import { ITEMS } from "../Common/functions/items";
import i18n from "../Common/components/LangConfig";

const IPhonItem = ITEMS.find((item) => item.title === i18n.t("itemsArray.26.title"));
const wristwatchItem = ITEMS.find((item) => item.title === i18n.t("itemsArray.28.title"));
const perfumeItem = ITEMS.find((item) => item.title === i18n.t("itemsArray.25.title"));
const Logo = () => {
  // 🧭 الشرائح التي سنعرضها
  const slides = [
    { id: 1, component: <IPhonSectionOne />, product: IPhonItem },
    { id: 2, component: <IPhonSectionTwo />, product: wristwatchItem },
    { id: 3, component: <IPhonSectionThree />, product: perfumeItem },
  ];

  // 🔁 الحالة الحالية للمؤشر
  const [activeIndex, setActiveIndex] = useState(0);

  // ⏰ لتبديل الشرائح تلقائياً كل 4 ثوانٍ (اختياري)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // 🧩 عند الضغط على مؤشر
  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const currentSlide = slides[activeIndex];

  return (
    
    <div dir="ltr"  className="flex relative xl:my-10 xl:ml-10 xl:gap-23 lg:gap-84 items-center jusify-between flex-col-reverse 
      md:flex-row pt-4  md:h-132 bg-black text-white w-full ">
      {/* ✅ المحتوى المتبدل */}

      <div >
        {currentSlide.component}
      </div>

      {/* ✅ الصورة المتبدلة */}
      
      <div className="transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
        <Link to={`/${currentSlide.product.title}`} >
          <img
            src={currentSlide.product.imageSrc}
            alt={currentSlide.product.title}
            className="w-[20rem] hover:scale-105  pb-10 lg:pb-0 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* ✅ مؤشرات التنقل */}

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <PaginationIndicator
          activeIndex={activeIndex}
          onClick={handleIndicatorClick}
          data={slides}
        />
      </div>
    </div>
  );
};

export default Logo;
