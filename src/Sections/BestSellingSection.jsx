import { useNavigate } from "react-router-dom";
import Red from "../Common/components/Red";
import BigText from "../Common/components/BigText";
import Button from "../Common/components/Button";
import SpecialOffers from './SpecialOffers'
import FlashSaleItem from "../Common/components/FlashSaleItem";
import i18n from "../Common/components/LangConfig";

const BestSellingSection= ({ items }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("OurProducts");
  }

  const sortedItems = items.sort(
    (a, b) => parseFloat(b.rates) - parseFloat(a.rates)
  );

  const BestItems = sortedItems.slice(0, 4);

  return (
    <>
      <div className="mx-2 my-16">
        <div className="flex flex-col sm:flex-row items-center justify-between">
      <div className="mt-8 ">
        <Red text={i18n.t("bestSelling.redTitle")} />
        <BigText text={i18n.t("bestSelling.title")} />
      </div>
       <Button
        className="bg-[var(--Secondary-2)] hover:scale-110 transition-all duration-300 rounded-md px-6 py-3 mt-23 text-white"
        text={i18n.t("redButtons.viewAll")}
        handleClick={handleClick}
      />
    </div>

        <div className="relative mt-10">
          <div className="flex flex-row gap-2 md:gap-8 overflow-x-hidden hover:overflow-x-auto xl:hover:overflow-x-hidden  transition-transform duration-300 transform  focus:outline-none ">
            {BestItems.slice(0, 4).map((item, index) => (
              <FlashSaleItem
                key={item.title}
                item={item}
                index={index}
                totalItems={items.length}
                stars={item.stars}
                rates={item.rates}
              />
            ))}
          </div>
        </div>
      </div>
      <SpecialOffers  />
    </>
  );
};

export default BestSellingSection;
