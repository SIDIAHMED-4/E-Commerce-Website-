import { Grid } from "@mui/material";
import Button from "../Common/components/Button";
import { useNavigate } from "react-router-dom";
import Red from "../Common/components/Red";
import BigText from "../Common/components/BigText";
import Arrow from "../Common/components/Arrow";
import FlashSaleItem from "../Common/components/FlashSaleItem";
import i18n from "../Common/components/LangConfig";

const OurProductsSection = ({ items }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("OurProducts");
  };

  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row items-center justify-between">
        <div className="mt-8 ">
          <Red text={i18n.t("allProducts.redTitle")} />
          <BigText text={i18n.t("allProducts.title")} />
        </div>
        <Arrow />
      </div>
      <div className="relative mt-10 flex flex-row gap-2 md:gap-12 transition-transform duration-300 transform ">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {items.slice(0, 8).map((item, index) => (
            <Grid item key={item.id}>
              <FlashSaleItem
                item={item}
                index={index}
                totalItems={items.length}
                stars={item.stars}
                rates={item.rates}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Button
        className="bg-[var(--Secondary-2)] block hover:scale-110 transition-all duration-300 mx-auto rounded-md px-8 py-3 mt-12 mb-12 text-white"
        text={i18n.t("redButtons.viewAllProducts")}
        handleClick={handleClick}
      />
    </>
  );
};

export default OurProductsSection;
