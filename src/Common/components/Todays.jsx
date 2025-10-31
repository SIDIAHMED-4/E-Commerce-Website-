import { useEffect, useState } from "react";
import calculateTimeLeft from "../functions/calculateTimeLeft";
import i18n from "./LangConfig";

const tomorrow = new Date();
tomorrow.setHours(tomorrow.getHours() + 24);

const Todays = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(tomorrow));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(tomorrow));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex gap-10 md:gap-20 flex-col md:flex-row ">
      <div className="font-inter font-bold text-2xl md:text-3xl relative">
        <span className="absolute text-xs font-poppins bottom-full left-0.5">
        {i18n.t("homeSections.row2.2")}
        </span>
        <span>{timeLeft.days}</span>
        <span className="text-red-400 mx-4">:</span>
        <span className="absolute text-xs font-poppins bottom-full left-1/5">
         {i18n.t("homeSections.row2.3")}
        </span>
        <span>{timeLeft.hours}</span>
        <span className="text-red-400 mx-4">:</span>
        <span className="absolute text-xs font-poppins bottom-full">
         {i18n.t("homeSections.row2.4")}
        </span>
        <span>{timeLeft.minutes}</span>
        <span className="text-red-400 mx-4">:</span>
        <span className="absolute text-xs font-poppins bottom-full left-full">
          {i18n.t("homeSections.row2.5")}
        </span>
        <span className="absolute ">{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default Todays;
