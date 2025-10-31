
import { ITEMS } from "../Common/functions/items";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MyLoader from "../Common/components/MyLoader";
import DynamicBreadcrumbs from "../Common/components/Breadcrumbs";
import { Link } from "react-router-dom";
import FlashSaleItem from "../Common/components/FlashSaleItem";
import i18n from "../Common/components/LangConfig";


export const OurProducts = () => {
  const [loading, setLoading] = useState(true);
  const [displayedItems, setDisplayedItems] = useState(10);
  const duplicatedItems = Array.from({ length: 2 }, () => ITEMS).flat();
  const totalItems = duplicatedItems.length;

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDisplayedItems(displayedItems + 10);
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" mt-40 flex flex-col gap-5">
      <div className=" mx-20 my-10 md:my-0">
        <DynamicBreadcrumbs />
      </div>
      <Typography variant="h3" align="center" gutterBottom>
          {i18n.t("allProducts.title")}
      </Typography>

      <div className=" mx-auto">
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {loading
            ? Array.from({ length: displayedItems }).map((_, index) => (
                <Grid item key={index}>
                  <MyLoader />
                </Grid>
              ))
            : duplicatedItems.slice(0, displayedItems).map((item) => (
                <Grid item key={item.id}>
                 
                    <FlashSaleItem
                      item={item}
                      totalItems={totalItems}
                      stars={item.stars}
                      rates={item.rates}
                    />
             
                </Grid>
              ))}
        </Grid>
      </div>
      {displayedItems < totalItems && (
        <button
          onClick={handleLoadMore}
          type="button"
          className="mx-auto text-center rounded-md px-5 py-3 mt-8 shadow hover:shadow-md active:shadow-inner transition
            hover:bg-gray-50 border text-[#696A75] hover:text-[#696A75] border-[#696A75] hover:border-[#696A75]
            hover:scale-105 hover:-translate-y-2 transform  duration-300 ease-in-out"
        >
           {i18n.t("whiteButtons.loadMore")}
        </button>
      )}
    </div>
  );
};
