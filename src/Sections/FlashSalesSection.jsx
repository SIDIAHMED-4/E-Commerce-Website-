import { useNavigate } from "react-router-dom";
import Arrow from "../Common/components/Arrow";
import BigText from "../Common/components/BigText";
import Button from "../Common/components/Button";
import Red from "../Common/components/Red";
import Todays from "../Common/components/Todays";
import { ITEMS } from "../Common/functions/items";
import Line3 from "../Common/components/Line3";
import FlashSaleItem from "../Common/components/FlashSaleItem";
import i18n from "../Common/components/LangConfig";

const FlashSalesSection = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("OurProducts");
  };

  const saleItems = ITEMS.filter(
    (item) => item.discount && item.discount !== ""
  );

  return (
    <>
      <div className="p-4">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between items-center sm:mr-6 sm:mb-4">
          <div className="sm:gap-0 gap-4 flex flex-row sm:flex-col">
            <Red text={i18n.t("homeSections.row2.0")} />
            <BigText text={i18n.t("homeSections.row2.1")} />
         </div>
         
          <Todays /> 
          <Arrow />
        </div>

        <div className="scrollbar relative  md:overflow-x-hidden hover:overflow-scroll  overflow-y-hidden flex justify-start items-center h-[500px] md:h-[400px] ">
          {saleItems.map((item, index) => (
            <FlashSaleItem
              key={item.id}
              item={item}
              index={index}
              totalItems={saleItems.length}
              stars={item.stars}
              rates={item.rates}
            />
          ))}
        </div>
      </div>
      <Button
        className="bg-[var(--Secondary-2)] hover:scale-110 transition-all duration-300 block mx-auto rounded-md px-8 py-3 mt-12 mb-12 text-white"
        text={i18n.t("redButtons.viewAllProducts")}
        handleClick={handleClick}
      />
      <Line3 />
    </>
  );
};

export default FlashSalesSection;
