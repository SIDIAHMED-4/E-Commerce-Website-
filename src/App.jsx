import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Wishlist from './Pages/Wishlist';
import PrivacyPolicy from "./Footer/PrivacyPolicy";
import TermsOfUse from "./Footer/TermsOfUse";
import FooterFAQ from "./Footer/FooterFAQ";
import { WishlistProvider } from "./Context/WishlistContext";
import { CartProvider } from "./Context/CartContext";
import { AuthProvider } from "./Auth/firebase";
import { OurProducts } from "./Pages/OurProducts";
import { Category } from "./Pages/Category";
import Cart from "./Pages/Cart";
import { Checkout } from "./Pages/Checkout";
import { Payment } from "./Pages/Payment";
import { Contact } from "./Pages/Contact";
import { Product } from "./Pages/Product";
import { NotFound } from "./Pages/NotFound";
import { Account } from "./Pages/Account";
import { LangProvider } from "./Context/LangContext";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        { path: "signUp", element: <SignUp /> },
        { path: "logIn", element: <LogIn /> },
        {
          path: "about",
          element: <About />,
        },
        { path: "wishlist", element: <Wishlist /> },
        { path: "contact", element: <Contact /> },
        { path: "FooterFAQ", element: <FooterFAQ /> },
        { path: "PrivacyPolicy", element: <PrivacyPolicy /> },
        { path: "TermsOfUse", element: <TermsOfUse /> },
        { path: "OurProducts", element: <OurProducts /> },
        { path: "Category", element: <Category /> },
        { path: "cart", element: <Cart /> } ,
        { path: "Checkout", element: <Checkout /> },
        { path: "/:title", element: <Product /> },
        { path: "*", element: <NotFound /> },
        { path: 'account', element: <Account />},
        {path: 'payment' , element: <Payment />}


        

      ],
    },
  ]);

  return (
    <div>
      <LangProvider>
      <CartProvider>
        <WishlistProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </WishlistProvider>
      </CartProvider></LangProvider>
    </div>
  );
}

export default App;
