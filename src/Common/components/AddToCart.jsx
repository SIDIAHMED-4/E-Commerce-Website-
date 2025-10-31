import { useEffect, useState } from "react"
import { useCart } from "../../Context/CartContext"

const AddToCart = ({item}) => {
    const { cartItems, addToCart, removeFromCart } = useCart();

    const [isInCart , setIsInCart] = useState(false);
     
    useEffect(() => {
        const cartItemExists = cartItems.some(
            (cartItems) => cartItems.id === item.id 
        );
        setIsInCart(cartItemExists)
    }, [cartItems, item])

    const handleAddToCart = () => {
        if ( isInCart ) {
            removeFromCart(item.id);
            setIsInCart(false);
            item.quantity = 0;
         } else {
            addToCart(item)
            setIsInCart(true)
            item.quantity = 1
        }
    };

return { handleAddToCart , isInCart , setIsInCart}
}

export default AddToCart;
