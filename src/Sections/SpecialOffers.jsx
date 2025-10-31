import { useEffect, useState } from "react";
import calculateTimeLeft from "../Common/functions/calculateTimeLeft";
import Button from "../Common/components/Button";
import { Link } from "react-router-dom";
import { ITEMS } from "../Common/functions/items";
import i18n from "../Common/components/LangConfig";

const tomorrow = new Date();
tomorrow.setHours(tomorrow.getHours() + 24);

const clasNam =
  "flex flex-col  items-center justify-center py-3 bg-white rounded-full";
const clasNam2 = "font-light text-xs w-[62px] text-center";

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(tomorrow));

  const OffreItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.19.title")
  )
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(tomorrow));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex gap-10 md:my-10 mt-10 items-center justify-center flex-col-reverse md:flex-row  min-h-[500px] bg-black text-white">
      <div className="flex flex-col gap-5 items-center md:items-start  md:mx-12">
        <h3 className="text-[var(--Button1)] text-sm sm:text-base">
        {i18n.t("deal.greenTitle")}
        </h3>

        <h2 className="xl:w-[500px] text-center md:text-start text-2xl sm:text-3xl lg:text-5xl font-semibold font-inter">
          {i18n.t("deal.title1")} <br /> {i18n.t("deal.title2")}
        </h2>

        <div className="font-semibold text-base flex flex-row gap-6 text-black">
          <div className={`${clasNam}`}>
            <span>{timeLeft.days}</span>
            <span className={`${clasNam2}`}> {i18n.t("deal.days")}</span>
          </div>
          <div className={`${clasNam}`}>
            <span>{timeLeft.hours}</span>
            <span className={`${clasNam2}`}> {i18n.t("deal.hours")}</span>
          </div>
          <div className={`${clasNam}`}>
            <span>{timeLeft.minutes}</span>
            <span className={`${clasNam2}`}>  {i18n.t("deal.minutes")}</span>
          </div>
          <div className={`${clasNam}`}>
            <span>{timeLeft.seconds}</span>
            <span className={`${clasNam2}`}> {i18n.t("deal.seconds")}</span>
          </div>
        </div>
{OffreItem && 
        <Link to={`/${OffreItem.title}`}>
          <Button
            className="bg-green-400 mb-8 py-4 px-12 rounded  ease-in-out  duration-300 transform hover:scale-105 hover:-translate-y-1"
            text={i18n.t("deal.buyNow")}
          />
        </Link>}
      </div>

      <div className="mt-4">
        {OffreItem && 
        <Link to={`/${OffreItem.title}`}>
        <img
          src={OffreItem.imageSrc}
          alt={OffreItem.title}
          loading="lazy"
          className="transition-transform duration-300 transform hover:-translate-y-4 hover:scale-110 hover:motion-safe:animate-pulse"
        /></Link>}
      </div>
    </div>
  );
};

export default SpecialOffers;
