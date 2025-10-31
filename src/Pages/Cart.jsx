import { Button } from "@mui/material";
import DynamicBreadcrumbs from "../Common/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import CartItem from "../Cart/CartItem";
import i18n from "../Common/components/LangConfig";

export const Cart = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-screen-lg mx-auto mt-48 flex flex-col gap-10">
      <DynamicBreadcrumbs />
      <div className="flex flex-row justify-between items-center py-6 px-2 md:px-14 shadow rounded md:gap-24  ">
        <h2 className="text-base">{i18n.t("cart.header.product")}</h2>
        <h2 className="text-base ml-10">{i18n.t("cart.header.price")}</h2>
        <h2 className="text-base ">{i18n.t("cart.header.quantity")}</h2>
        <h2 className="text-base hidden md:flex">{i18n.t("cart.header.subtotal")}</h2>
      </div>
      {cartItems.map((item, index) => (
        <CartItem
          key={item.title}
          item={item}
          index={index}
          stars={item.stars}
          rates={item.rates}
        />
      ))}
      <div className="flex justify-between items-center mt-2">
        <Link to="..">
          <Button
            variant="contained"
            sx={{
              color: "black",
              backgroundColor: "white",
              padding: "20px 20px",
              "&:hover": {
                transform: "translateY(-4px)",
                "&:focus": {
                  transform: "translateY(0)",
                  transition: "transform 0.1s ease",
                  
                },
              },
            }}
          >
            {i18n.t("whiteButtons.returnToShop")}
          </Button>
        </Link>

        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "white",
            padding: "20px 20px",
            "&:hover": {
              transform: "translateY(-4px)",
              "&:focus": {
                transform: "translateY(0)",
                transition: "transform 0.1s ease",
                
              },
            },
          }}
        >
       {i18n.t("whiteButtons.updateCart")}
        </Button>
      </div>
      <div className="flex items-center mt-4 md:flex-row gap-8 flex-col justify-between ">
        <div className="flex items-center md:justify-between justify-center mt-4 gap-2 ">
          <input
            type="text"
            placeholder={i18n.t("checkOut.couponCode")}
            className="border border-gray-900 rounded-md p-3 w-[160px] lg:w-[260px] text-sm md:text-base"
          />
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "red",
              padding: "10px 20px",
              "&:hover": {
                transform: "translateY(-4px)",
                "&:focus": {
                  transform: "translateY(0)",
                  transition: "transform 0.1s ease",
                  
                },
              },
            }}
          >
            {i18n.t("redButtons.applyCoupon")}
          </Button>
        </div>
        <div className="flex justify-between flex-col gap-6  border py-8 px-6 md:w-[470px]">
          <p className="text-xl font-semibold">{i18n.t("cart.cartTotal")}</p>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{i18n.t("cart.total")}:</p>
            <p className="text-xl">${subtotal}</p>
          </div>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{i18n.t("cart.subtotal")}:</p>
            <p className="text-xl">${total}</p>
          </div>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{i18n.t("cart.shipping")}:</p>
            <p className="text-xl">Free</p>
          </div>{" "}
          <div className="mx-10">
            <Link to="/Checkout">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  padding: "10px 20px",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    "&:focus": {
                      transform: "translateY(0)",
                      transition: "transform 0.1s ease",
                  
                    },
                  },
                }}
              >
              {i18n.t("redButtons.processToCheckout")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
