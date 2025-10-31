import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import Red from "../Common/components/Red";
import { Link } from "react-router-dom";
import { ITEMS } from "../Common/functions/items";
import { useWichlist } from "../Context/WishlistContext";
import { motion } from "framer-motion";
import DynamicBreadcrumbs from "../Common/components/Breadcrumbs";
import FlashSaleItem from "../Common/components/FlashSaleItem";
import i18n from "../Common/components/LangConfig";

const Wishlist = () => {
  const { wishlistItems } = useWichlist();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [massage, setMassage] = useState("");
  const [severity, setSeverity] = useState("success");
  const { moveAllToCart } = useCart();
  let relatedItems;

  const handleClick = () => {
    const state = moveAllToCart(wishlistItems);
    if (wishlistItems.length === 0 || wishlistItems === null) {
      setMassage(i18n.t("Snackbar.noItems"));
      setSeverity("info");
    } else {
      if (state) {
        setMassage(i18n.t("Snackbar.movedToCart"));
        setSeverity("success");
      } else {
        setMassage(i18n.t("Snackbar.inCart"));
        setSeverity("info");
      }
    }
    setTimeout(() => {
      setSnackbarOpen(true);
    }, 500);
  };

  const wishlistTypes = new Set(wishlistItems.map((item) => item.type));

  const getRelatedItems = () => {
    relatedItems = ITEMS.filter(
      (item) =>
        wishlistTypes.has(item.type) &&
        !wishlistItems.some((wish) => wish.id === item.id)
    ).slice(0, 5);
    if (!relatedItems || !relatedItems.length) {
      relatedItems = ITEMS.filter((item) => item.price > 1000).slice(0, 5);
    }
    return relatedItems;
  };
  getRelatedItems();

  return (
    <>
    <div className="mx-12 mt-50 lg:mt-45">
            <DynamicBreadcrumbs />
          </div>
    <div className="flex flex-col md:mx-32 mt-3">
      <div className="mx-auto md:mx-2 my-20">
        <div className="flex justify-around md:justify-between items-center md:mr-6 mb-12">
          <h2 className="text-lg"> {i18n.t("wishlist.title")} ({wishlistItems.length})</h2>
          <Button
            sx={{
              color: "black",
              backgroundColor: "white",
              padding: "10px 20px",
              border: "1px solid gray",
              "&:hover": {
                transform: "translateY(-4px)",
                "&:focus": {
                  transform: "translateY(0)",
                  transition: "transform 0.1s ease",
                
                },
              },
            }}
            onClick={handleClick}
            disabled={
              wishlistItems.length === 0 ||
              wishlistItems === null ||
              snackbarOpen === true
            }
          >
            {i18n.t("whiteButtons.moveAllToBag")}
          </Button>
        </div>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {wishlistItems.map((item, index) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <FlashSaleItem
                item={item}
                index={index}
                totalItems={wishlistItems.length}
                stars={item.stars}
                rates={item.rates}
                isInWishlistPage={true}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <>
        <div className="flex justify-between items-center md:mr-6 mx-4 ">
          <Red classTitle text={i18n.t("wishlist.justForYou")} />

          <Link to="/explore">
            <Button variant="outlined" className="mx-auto my-8">
              {i18n.t("whiteButtons.seeAll")}
            </Button>
          </Link>
        </div>
        <div className="relative  overflow-x-auto overflow-y-hidden flex justify-start items-center md:h-[400px] ">
          <motion.div
            className="flex gap-2 md:gap-12"
            initial={{ opacity: 0, x: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            {relatedItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <FlashSaleItem
                  item={item}
                  index={index}
                  totalItems={relatedItems.length}
                  stars={item.stars}
                  rates={item.rates}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        vertical="top"
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {massage}
        </Alert>
      </Snackbar>
    </div></>
  );
};

export default Wishlist;
