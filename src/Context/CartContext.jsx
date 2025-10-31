import { useContext, useState, createContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem !== -1) {
      // If item already exists in cart, update its quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItem] = {
        ...updatedCart[existingItem],
        quantity: updatedCart[existingItem].quantity + item.quantity,
      };
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    } else {
      // If item does not exist in cart, add it
      const updatedCart = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleIncrease = (item) => {
    if (item.quantity >= 0) {
      if (item.quantity === 0) {
        addToCart(item);
        item.quantity = 1;
      }
      const existingItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + 1,
        };
        item.quantity += 1;
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
    }
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      item.quantity = 0;
      removeFromCart(item.id);
    } else if (item.quantity > 1) {
      item.quantity -= 1;
      const existingItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[existingItemIndex].quantity > 1) {
          updatedCartItems[existingItemIndex] = {
            ...updatedCartItems[existingItemIndex],
            quantity: updatedCartItems[existingItemIndex].quantity - 1,
          };
        } else {
          updatedCartItems.splice(existingItemIndex, 1); // Remove item from cart if quantity is 1
        }
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
    }
  };

   const moveAllToCart = (items) => {
    const itemsToMove = items.filter((item) => !isInCart(item.id));
    if (itemsToMove.length === 0) return false;

    const updatedCartItems = [
      ...cartItems,
      ...itemsToMove.map((item) => ({ ...item, quantity: 1 })),
    ];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    return true;
  };

  // Function to check if an item is in the cart
  const isInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart , handleIncrease, handleDecrease  , moveAllToCart}}>
      {children}
    </CartContext.Provider>
  );
};
