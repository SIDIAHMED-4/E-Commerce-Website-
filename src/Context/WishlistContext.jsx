import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const useWichlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const savedWishlistItems = JSON.parse(
      localStorage.getItem("wishlistItems")
    );
    if (savedWishlistItems) {
      setWishlistItems(savedWishlistItems);
    }
  }, []);

  const addToWishlist = (item) => {
    const updatedWishlistItems = [...wishlistItems, item];
    setWishlistItems(updatedWishlistItems);
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlistItems));
  };

  const removeFromWishlist = (itemId) => {
    const updatedWishlistItems = wishlistItems.filter(
      (item) => item.id !== itemId
    );

    setWishlistItems(updatedWishlistItems);
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlistItems));
  };

  const isInWishlist = (itemId) => {
    return wishlistItems.some((item) => item.id === itemId);
  };
  
  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
