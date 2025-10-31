import {  Grid } from "@mui/material";
import { ITEMS } from "../functions/items";
import Red from "./Red";
import { Link } from "react-router-dom";
import FlashSaleItem from "./FlashSaleItem";
import i18n from "./LangConfig";

export const RelatedItems = ({ selectedProduct }) => {
  const relatedItems = ITEMS.filter(
    (item) =>
      item.type == selectedProduct.type && item.title !== selectedProduct.title
  );

  return (
    <>
      <div className="mx-auto md:mx-2">
        <div className="mt-8 ">
          <Red text={i18n.t("productPage.relatedItems")} />

        </div>
        <div className="relative mt-10 flex flex-row gap-2 md:gap-12 transition-transform duration-300 transform ">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {relatedItems.map((item, index) => (
             
              <Grid item key={item.id}>
                <FlashSaleItem 
                  item={item}
                  index={index}
                  totalItems={relatedItems.length}
                  stars={item.stars}
                  rates={item.rates}
                />
              </Grid>
            ))}
            
          </Grid>
        </div>
      </div>
    </>
  );
};
